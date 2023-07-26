# perN

本アプリは、チラシやサイトの情報から、興味ある商品の単位当たりの価格を計算するWebアプリケーションです。

## 開発環境

Next.jsを利用して開発します。

以下を実行し関連するパッケージをインストール後、

~~~shell
npm install
~~~

以下を実行し、開発用サーバーを起動し、[http://localhost:3000](http://localhost:3000)にアクセスして動作確認してください。

~~~shell
npm run dev
~~~

## storybook

アプリの部品は、[Storybook: Frontend workshop for UI development](https://storybook.js.org/)を利用してデザインします。

以下を実行し、プロジェクト内に`storybook`の環境を作成します。

~~~shell
npx storybook@latest init
~~~
