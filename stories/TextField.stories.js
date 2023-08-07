import TextField from "../components/text_field";

export default {
    title: "コンポーネント/03. テキスト入力",
    component: TextField,
    argTypes: {
        label: {
            control: 'text',
            description: 'テキスト入力項目のラベル'
        },
        isRequired: {
            control: 'boolean',
            description: '必須入力項目であるかの当否'
        },
        description: {
            control: 'text',
            description: 'テキスト入力項目の説明'
        },
        fieldSize: {
            control: 'number',
            description: 'テキスト入力項目の入力可能文字数'
        },
        errorMessage: {
            control: 'text',
            description: '入力誤りがあった場合のエラーメッセージ'
        },
        initialValue: {
            control: 'text',
            description: 'テキスト入力項目の初期入力値'
        },
        disabled: {
            control: 'boolean',
            description: 'テキスト入力項目が無効化されているかの当否',
            table: {
                type: 'boolean',
            }
        },
        fieldType: {
            control: 'radio',
            description: 'テキスト入力項目の入力内容の種類',
            options: ['date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'text', 'time', 'url', 'week'],
            table: {
                type: 'text'
            }
        }
    }

}

export const Default = {
    args: {
        label: "ユーザー名",
        isRequired: true,
        description: "ログイン後に画面に表示されるユーザー名です。",
        fieldSize: 10,
        errorMessage: "",
        initialValue: "",
    }
}

export const Focused = {
    args: {
        label: "ユーザー名",
        isRequired: true,
        description: "ログイン後に画面に表示されるユーザー名です。",
        fieldSize: 10,
        errorMessage: "",
        initialValue: "",
    },
    parameters: {
        pseudo: {
          focus: ["div.Focused input"],
        }
    }
}

export const Filled = {
    args: {
        label: "ユーザー名",
        isRequired: true,
        description: "ログイン後に画面に表示されるユーザー名です。",
        fieldSize: 10,
        errorMessage: "",
        initialValue: "テストユーザー",
    }
}

export const Error = {
    args: {
        label: "ユーザー名",
        isRequired: true,
        description: "ログイン後に画面に表示されるユーザー名です。",
        fieldSize: 10,
        errorMessage: "登録済みのユーザー名です。別のユーザー名を入力して下さい。",
        initialValue: "バッドユーザー",
    }
}

export const Disabled = {
   args: {
        label: "ユーザー名",
        isRequired: true,
        description: "ログイン後に画面に表示されるユーザー名です。",
        fieldSize: 10,
        errorMessage: "",
        initialValue: "テストユーザー",
        disabled: true,
    }
}
