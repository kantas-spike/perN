import RadioButtonGroup from "../components/radio_button_group"
import { useState } from "react"

export default {
    title: 'コンポーネント/05. ラジオボタン/Radio Button Group',
    component: RadioButtonGroup,
    argTypes: {
        label: {
            control: 'text',
            description: 'ラジオボタングループの見出し',
        },
        isRequired: {
            control: 'boolean',
            description: '必須項目の要否',
        },
        description: {
            control: 'text',
            description: 'ラジオボタングループの説明',
        },
        errorMessage: {
            control: 'text',
            description: 'エラーメッセージ',
        },
        disabled: {
            control: 'boolean',
            description: '無効化の有無',
        },
        groupName: {
            control: 'text',
            description: 'ラジオボタンのグループ名',
        },
        type: {
            control: 'radio',
            description: 'ラジオボタンの表示形式',
            options: ['normal', 'tile']
        }
    }
}

const getRamdomString = (prefix="rg_") => {
    return prefix + Math.random().toString(8).substring(2)
}

const useStateWrapper = (args) => {
    const [value, setValue] = useState(args['checkedValue'] || '')
    return (
        <RadioButtonGroup {...args} checkedValue={value} onChanged={(e) => setValue(e.target.value)} />
    )
}

export const GroupNormal = {
    args: {
        label: "味について",
        isRequired: true,
        description: "該当するものを1つ選択してください",
        items: ["好き", "やや好き", "やや嫌い", "嫌い"],
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalWithRequiredAndNoDesc = {
    name: "デフォルト型(必須、説明なし)",
    args: {
        ...GroupNormal.args,
        description: null,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalWithNoRequiredAndNoDesc = {
    name: "デフォルト型(任意、説明なし)",
    args: {
        ...GroupNormal.args,
        description: null,
        isRequired: false,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalWithRequiredAndDesc = {
    name: "デフォルト型(必須、説明あり)",
    args: {
        ...GroupNormal.args,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalWithNoRequiredAndDesc = {
    name: "デフォルト型(任意、説明あり)",
    args: {
        ...GroupNormal.args,
        isRequired: false,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalWithRequiredAndDescChecked = {
    name: "デフォルト型(必須、説明あり、選択済み)",
    args: {
        ...GroupNormal.args,
        checkedValue: "やや好き",
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalWithNoRequiredAndDescChecked = {
    name: "デフォルト型(任意、説明あり、選択済み)",
    args: {
        ...GroupNormal.args,
        isRequired: false,
        checkedValue: "やや好き",
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const NormalErrorWithRequiredAndDesc = {
    name: "デフォルト型 エラー(必須、説明あり)",
    args: {
        ...GroupNormal.args,
        groupName: getRamdomString(),
        errorMessage: "項目を選択してください。"
    },
    render: useStateWrapper,
}

export const NormalErrorWithNoRequiredAndDesc = {
    name: "デフォルト型 エラー(任意、説明あり)",
    args: {
        ...GroupNormal.args,
        isRequired: false,
        groupName: getRamdomString(),
        errorMessage: "項目を選択してください。"
    },
    render: useStateWrapper,
}

export const NormalDisabledWithRequiredAndDesc = {
    name: "デフォルト型 Disabled(必須、説明あり)",
    args: {
        ...GroupNormal.args,
        groupName: getRamdomString(),
        disabled: true,
    },
    render: useStateWrapper,
}

export const NormalDisabledWithNoRequiredAndDesc = {
    name: "デフォルト型 Disabled(任意、説明あり)",
    args: {
        ...GroupNormal.args,
        isRequired: false,
        groupName: getRamdomString(),
        disabled: true,
    },
    render: useStateWrapper,
}


export const GroupTile = {
    args: {
        label: "味について",
        groupName: "味について_タイル版",
        isRequired: true,
        description: "該当するものを1つ選択してください",
        items: ["好き", "やや好き", "やや嫌い", "嫌い"],
        type: "tile",
    },
    render: useStateWrapper,
}

export const TileWithRequiredAndNoDesc = {
    name: "タイル型(必須、説明なし) アイテム(ラベルのみ)",
    args: {
        ...GroupTile.args,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const TileWithNoRequiredAndNoDesc = {
    name: "タイル型(任意、説明なし) アイテム(ラベルのみ)",
    args: {
        ...GroupTile.args,
        isRequired: false,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const TileWithRequiredAndDesc = {
    name: "タイル型(必須、説明あり) アイテム(ラベルのみ)",
    args: {
        ...GroupTile.args,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const TileWithNoRequiredAndDesc = {
    name: "タイル型(任意、説明あり) アイテム(ラベルのみ)",
    args: {
        ...GroupTile.args,
        isRequired: false,
        groupName: getRamdomString(),
    },
    render: useStateWrapper,
}

export const TileWithRequiredAndItem = {
    name: "タイル型(必須、説明あり) アイテム",
    args: {
        ...GroupTile.args,
        groupName: getRamdomString(),
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithNoRequiredAndItem = {
    name: "タイル型(任意、説明あり) アイテム",
    args: {
        ...GroupTile.args,
        isRequired: false,
        groupName: getRamdomString(),
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithRequiredAndItemChecked = {
    name: "タイル型(必須、説明あり、選択済み) アイテム",
    args: {
        ...GroupTile.args,
        checkedValue: "やや嫌い",
        groupName: getRamdomString(),
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithNoRequiredAndItemChecked = {
    name: "タイル型(任意、説明あり、選択済み) アイテム",
    args: {
        ...GroupTile.args,
        isRequired: false,
        checkedValue: "やや嫌い",
        groupName: getRamdomString(),
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithRequiredAndItemError = {
    name: "タイル型(必須、説明あり、エラー) アイテム",
    args: {
        ...GroupTile.args,
        groupName: getRamdomString(),
        errorMessage: "項目を選択してください。",
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithNoRequiredAndItemError = {
    name: "タイル型(任意、説明あり、エラー) アイテム",
    args: {
        ...GroupTile.args,
        isRequired: false,
        groupName: getRamdomString(),
        errorMessage: "項目を選択してください。",
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithRequiredAndItemDisabled = {
    name: "タイル型(必須、説明あり、Disabled) アイテム",
    args: {
        ...GroupTile.args,
        groupName: getRamdomString(),
        disabled: true,
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}

export const TileWithNoRequiredAndItemDisabled = {
    name: "タイル型(任意、説明あり、Disabled) アイテム",
    args: {
        ...GroupTile.args,
        isRequired: false,
        groupName: getRamdomString(),
        disabled: true,
        items: [
            {
                label: "好き",
                description: "補足説明",
            },
            {
                label: "やや好き",
                description: "補足説明",
            },
            {
                label: "やや嫌い",
                description: "補足説明",
            },
            {
                label: "嫌い",
                description: "補足説明",
            },
        ]
    },
    render: useStateWrapper,
}