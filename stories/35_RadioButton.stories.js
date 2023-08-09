import RadioButton from "../components/radio_button"
import { useState } from "react"

export default {
    title: "コンポーネント/05. ラジオボタン/Radio Button",
    component: RadioButton,
    argTypes: {
        label: {
            control: 'text',
            description: 'ラジオボタンのラベル',
        },
        value: {
            control: 'text',
            description: 'ラジオボタンの値',
        },
        name: {
            control: 'text',
            description: 'ラジオボタンのグループ名'
        },
        id: {
            control: 'text',
            description: 'ラジオボタンのid',
        },
        type: {
            control: 'radio',
            description: 'ラジオボタンの表示形式',
            options: ['normal', 'tile'],
            table: {
                defaultValue: {
                    summary: 'normal',
                },
            }
        },
        description: {
            control: 'text',
            description: 'ラジオボタンの説明'
        },
        disabled: {
            control: 'boolean',
            description: '無効化の有無',
        },
        hasError: {
            control: 'boolean',
            description: 'エラーの有無',
        }
    }
}

const getRamdomString = (prefix="r_") => {
    return prefix + Math.random().toString(8).substring(2)
}

const useStateWrapper = (args) => {
    const [value, setValue] = useState(args['checkedValue'] || '')
    const id = args['name'] + "_" + args['id']
    return (
        <RadioButton {...args} id={id} checkedValue={value} onChanged={(e) => setValue(e.target.value)} />
    )
}

export const RadioNormal = {
    args: {
        label: "選択肢",
        value: "item1",
        id: "item1",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioNormlDefault = {
    args: {
        label: "選択肢",
        value: "item1",
        id: "item1",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioNormalChecked = {
    args: {
        label: "選択肢",
        value: "item1",
        id: "item1",
        checkedValue: 'item1',
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioNormalError = {
    args: {
        label: "選択肢",
        value: "item1",
        id: "item1",
        name: getRamdomString(),
        hasError: true,
    },
    render: useStateWrapper,
}

export const RadioNormalDisabled = {
    args: {
        label: "選択肢",
        value: "item1",
        id: "item1",
        name: getRamdomString(),
        disabled: true,
    },
    render: useStateWrapper,
}

export const RadioTile = {
    args: {
        label: "選択肢",
        value: "item2",
        id: "item2",
        type: "tile",
        description: "選択肢の説明です。",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioTileDefault = {
    args: {
        label: "選択肢",
        value: "item2",
        id: "item2",
        type: "tile",
        description: "選択肢の説明です。",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioTileChecked = {
    args: {
        label: "選択肢",
        value: "item2",
        id: "item2",
        checkedValue: 'item2',
        type: "tile",
        description: "選択肢の説明です。",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioTileError = {
    args: {
        label: "選択肢",
        value: "item2",
        id: "item2",
        hasError: true,
        type: "tile",
        description: "選択肢の説明です。",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}

export const RadioTileDisabled = {
    args: {
        label: "選択肢",
        value: "item2",
        id: "item2",
        disabled: true,
        type: "tile",
        description: "選択肢の説明です。",
        name: getRamdomString(),
    },
    render: useStateWrapper,
}