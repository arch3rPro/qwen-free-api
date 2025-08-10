import _ from 'lodash';

export default {

    prefix: '/v1',

    get: {
        '/models': async () => {
            return {
                "data": [
                    {
                        "id": "qwen3-235b-a22b",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen3-coder-plus",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-plus-latest",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-turbo-latest",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-omni-turbo",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwq-plus",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qvq-max",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qvq-max-latest",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-max",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-max-longcontext",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-max-latest",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-plus",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-turbo",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-vl-max",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    },
                    {
                        "id": "qwen-vl-plus",
                        "object": "model",
                        "owned_by": "qwen-free-api"
                    }
                ]
            };
        }

    }
}