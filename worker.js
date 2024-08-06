import { WebWorkerMLCEngineHandler, MLCEngine } from "https://esm.run/@mlc-ai/web-llm";

const handler = new WebWorkerMLCEngineHandler()

self.onmessage = msg => {
    handler.onmessage(msg)
};

