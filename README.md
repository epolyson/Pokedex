# Pokedex
React, TypeScript学習用にポケモン図鑑を作成します。

## 遭遇したエラーと解決法

-1. npx create-react-appで作成したプロジェクト全体に対して、save,deleteの権限がないと言われる

```Command failed: "/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code" --file-write "/Users/eikipolyson/Library/Application Support/Code/code-elevated-cns2il1B" "/Users/eikipolyson/Documents/react_dev/Pokedex/pokedex/src/App.js" Error using --file-write: EPERM: operation not permitted, open '/Users/eikipolyson/Documents/react_dev/Pokedex/pokedex/src/App.js'```

### 解決法

```sudo chown -R eikipolyson /Users/eikipolyson/Documents/react_dev```

上記コマンドを入力し、userに権限を与える