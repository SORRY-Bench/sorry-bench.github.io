from dash import Dash, dcc, html, Input, Output
import plotly.express as px
import plotly.graph_objects as go
import json

# Load your data
data_path = "data/sorry_bench/model_judgment/ft-mistral-7b-instruct-v0.2.jsonl"
with open(data_path, "r") as f:
    raw_judge_results = [json.loads(line) for line in f]

def avg(L):
    return sum(L) / len(L)

judge_results = dict()
judge_results["gpt-4o-2024-05-13"] = [[] for i in range(45)]
judge_results["gpt-4-turbo-2024-04-09"] = [[] for i in range(45)]
judge_results["gpt-4-0125-preview"] = [[] for i in range(45)]
judge_results["gpt-4-1106-preview"] = [[] for i in range(45)]
judge_results["gpt-4-0613"] = [[] for i in range(45)]
judge_results["gpt-3.5-turbo-0125"] = [[] for i in range(45)]
judge_results["gpt-3.5-turbo-0613"] = [[] for i in range(45)]
judge_results["gpt-3.5-turbo-1106"] = [[] for i in range(45)]
judge_results["claude-3-opus-20240229"] = [[] for i in range(45)]
judge_results["claude-3-sonnet-20240229"] = [[] for i in range(45)]
judge_results["claude-3-haiku-20240307"] = [[] for i in range(45)]
judge_results["claude-2.1"] = [[] for i in range(45)]
judge_results["claude-2.0"] = [[] for i in range(45)]
judge_results["claude-instant-1.2"] = [[] for i in range(45)]
judge_results["llama-3-70b-instruct"] = [[] for i in range(45)]
judge_results["llama-3-8b-instruct"] = [[] for i in range(45)]
judge_results["llama-2-7b-chat"] = [[] for i in range(45)]
judge_results["llama-2-13b-chat"] = [[] for i in range(45)]
judge_results["llama-2-70b-chat"] = [[] for i in range(45)]
judge_results["gemini-1.5-pro"] = [[] for i in range(45)]
judge_results["gemini-1.5-flash"] = [[] for i in range(45)]
judge_results["gemini-pro"] = [[] for i in range(45)]
judge_results["gemma-7b-it"] = [[] for i in range(45)]
judge_results["vicuna-7b-v1.5"] = [[] for i in range(45)]
judge_results["vicuna-13b-v1.5"] = [[] for i in range(45)]
judge_results["vicuna-33b-v1.3"] = [[] for i in range(45)]
judge_results["mistral-7b-instruct-v0.2"] = [[] for i in range(45)]
judge_results["mistral-7b-instruct-v0.1"] = [[] for i in range(45)]
judge_results["mixtral-8x7b-instruct-v0.1"] = [[] for i in range(45)]
judge_results["openchat-3.5-0106"] = [[] for i in range(45)]
judge_results["dolphin-2.2.1-mistral-7b"] = [[] for i in range(45)]
judge_results["zephyr-7b-beta"] = [[] for i in range(45)]
judge_results["aurora-m-biden-harris-redteamed"] = [[] for i in range(45)]
judge_results["qwen1.5-0.5b-chat"] = [[] for i in range(45)]
judge_results["qwen1.5-1.8b-chat"] = [[] for i in range(45)]
judge_results["qwen1.5-4b-chat"] = [[] for i in range(45)]
judge_results["qwen1.5-7b-chat"] = [[] for i in range(45)]
judge_results["qwen1.5-14b-chat"] = [[] for i in range(45)]
judge_results["qwen1.5-32b-chat"] = [[] for i in range(45)]
judge_results["qwen1.5-72b-chat"] = [[] for i in range(45)]
judge_results["chatglm3-6b"] = [[] for i in range(45)]
judge_results["yi-6b-chat"] = [[] for i in range(45)]
judge_results["yi-34b-chat"] = [[] for i in range(45)]

print(f"Total Model Count: {len(judge_results)}")

for result in raw_judge_results:
    category_id = (result["question_id"] - 1) // 10
    if result["model"] in judge_results.keys():
        judge_results[result["model"]][category_id].append(result["score"])

avg_score_overall = dict()
judge_avg_scores_per_category = dict()
for model in judge_results:
    judge_avg_scores_per_category[model] = []
    for category in range(len(judge_results[model])):
        judge_avg_scores_per_category[model].append(avg(judge_results[model][category]))
    
    avg_score_overall[model] = avg(judge_avg_scores_per_category[model])

# Sort the model names by their average score
sorted_models = sorted(avg_score_overall, key=avg_score_overall.get, reverse=True)
sorted_model_scores = [judge_avg_scores_per_category[model] for model in sorted_models]

from data.sorry_bench.meta_info import category_descriptions_shortest
ticktexts = [f"#{i+1}: {category_descriptions_shortest[i]}" for i in range(45)]

app = Dash(__name__)

app.layout = html.Div([
    html.H4('Model Judgment Scores by Category'),
    dcc.Graph(id="graph"),
    html.P("Categories:"),
    dcc.Checklist(
        id='categories',
        options=[{'label': ticktexts[i], 'value': i} for i in range(45)],
        value=list(range(45)),
        inline=True,
    ),
])

@app.callback(
    Output("graph", "figure"), 
    Input("categories", "value"))
def update_heatmap(selected_categories):
    selected_categories.sort()
    fig = go.Figure(data=go.Heatmap(
        z=[[judge_avg_scores_per_category[model][i] for i in selected_categories] for model in sorted_models],
        x=[ticktexts[i] for i in selected_categories],
        y=sorted_models,
        colorscale='Sunsetdark'
    ))
    fig.update_layout(
        autosize=False,
        width=1100,
        height=950,
        margin=dict(l=0, r=0, t=0, b=0),
        font=dict(
            family="Arial",
            # size=18,
            # color="RebeccaPurple",
        )
    )
    fig.update_xaxes(tickangle=60)
    fig.write_html("assets/sorry_bench.html")
    return fig

if __name__ == '__main__':
    app.run_server(debug=True)
