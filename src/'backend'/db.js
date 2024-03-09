export const db = [
    {
        id: 'default',
        password: '',
        documents: [
            {
                title: 'the linguist',
                nodes: [
                    {
                        type: 'text',
                        content: 'Hello, World!'
                    },
                    {
                        type: 'section',
                        content: {
                            title: 'chapter one',
                            nodes: [
                                {
                                    type: 'text',
                                    content: 'Once upon a time'
                                },
                                {
                                    type: 'text',
                                    content: 'there was a child'
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }
]