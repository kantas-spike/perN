import TextArea from "../components/text_area"
import { useState } from "react"

export default {
    title: "コンポーネント/04. テキストエリア",
    component: TextArea,
    argTypes: {
        label: {
            control: 'text',
            description: 'テキストエリアのラベル'
        },
        isRequired: {
            control: 'boolean',
            description: '必須入力項目であるかの当否'
        },
        description: {
            control: 'text',
            description: 'テキストエリアの説明'
        },
        value: {
            control: 'text',
            description: 'テキストエリアの入力値'
        },
        onTextChanged: {
            action: 'changed',
            description: 'テキストエリアのテキストが変更された時のイベントハンドラー'
        },
        errorMessage: {
            control: 'text',
            description: '入力誤りがあった場合のエラーメッセージ'
        },
        disabled: {
            control: 'boolean',
            description: 'テキストエリアが無効化されているかの当否',
            table: {
                type: 'boolean',
            }
        },
        rows: {
            control: 'number',
            description: 'テキストエリアの行数',
            table: {
                type: 'number',
            }
        },
        cols: {
            control: 'number',
            description: 'テキストエリアの各行の文字数',
            table: {
                type: 'number',
            }
        },
        maxlength: {
            control: 'number',
            description: 'テキストエリアの最大文字数',
            table: {
                type: 'number',
            }
        }
    }
}

const useStateWrapper = (args) => {
    const [value, setValue] = useState(args['value'] || '')
    return (
        <TextArea {...args} value={value} onTextChanged={(e) => setValue(e.target.value)} />
    )
}

export const Default = {
    args: {
        label: "商品についての補足情報",
        isRequired: true,
        description: "サイト・店舗名、購入有無、感想などを記入してください",
        maxlength: 20,
    },
    render: useStateWrapper,
}
