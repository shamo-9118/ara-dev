# ara-dev
## わからなかったこと調べたこと備忘録（今さら）
setTimeout()に引数のある関数を渡そうとしたら動かなかった、、
ただ関数を呼ぶだけなら良いけど引数がある関数を呼ぶ場合は無名関数をよんでその中で引数のある関数を呼ぶ必要があるらしい
なんでかという理屈はわかっていない、、
```
setTimeout(() => compareCards(button), 1000)
```
typeをよんで行ったらこんな感じのがあった、
```
interface FunctionConstructor {
    /**
     * Creates a new function.
     * @param args A list of arguments the function accepts.
     */
    new(...args: string[]): Function;
    (...args: string[]): Function;
    readonly prototype: Function;
}

declare var Function: FunctionConstructor;
```
ちょっとよくわからないけどなんか関係ありそう