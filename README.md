# langChain

## Common Runnable types
| Runnable         | Purpose                |
| ---------------- | ---------------------- |
| PromptTemplate   | Creates prompts        |
| ChatModel        | Generates responses    |
| RunnableSequence | Combines steps         |
| RunnableMap      | Runs tasks in parallel |
| OutputParser     | Formats output         |

## Main Runnable methods
| Method     | Example Code                                |
| ---------- | ------------------------------------------- |
| `invoke()` | `model.invoke("Explain AI")`                |
| `batch()`  | `model.batch(["Explain AI", "Explain ML"])` |
| `stream()` | `model.stream("Explain AI")`                |
