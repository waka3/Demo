## Everyday Types 常用类型声明
- 基本类型：string, number, boolean
    ```ts
        let name: string = 'Mark';
    ```
- Array Type: Array<number> / number[]
    ```ts
        let numbers: Array<number> = [1,2,3];
        // let numbers: number[]
    ```

- any: 任意类型

- Union Types: 联合类型  id: string | number;

- type 和 interface
    ```ts
        type posProps = { x: number; y: number };
        let pos: posProps = {
            x: 1,
            y: 10
        }
        
        type Animal = { 
            name: string
        }

        type Bear = Animal & {
            honey: boolean
        }

        // Bear = {
        //    name: string;
        //    honey: boolean;
        //}
    ```
    ```ts
        interface posProps = { x: number; y: number };
        let pos: posProps = {
            x: 1,
            y: 10
        }

        interface Animal {
            name: string
        }

        interface Bear extends Animal {
            honey: boolean
        }

        // Bear = {
        //    name: string;
        //    honey: boolean;
        //}
    ```
- as: 类型断言（Type Assertion） xxx as xxxType 将指定内容断言为指定类型
    > [1,2] as const: 数组值只读不可修改 

- Literal Types： 字面量类型
    ```ts
        type alignment =  "left" | "right" | "center"
    ```
- Object Types: 对象类型
    ```ts
        // 用对象类型声明示例一部分符合和声明写法
        interface PersonProps {
            readonly id: string, // 只读
            name?: string, // ?: 可为空， ->  string | underfined
            weight?: number | string, // | 联合类型
            [index: string]: number, // 拓展未知名称的 key，但是值类型为：number
            height?: number, // Property 'height' of type 'number | undefined' is not assignable to 'string' index type 'number'.
        }
    ```

## Narrowing 缩小类型范围 (运算)
- typeof 获取 Type 类型
    > 小技巧: typeof Object, 将Object对象转为类型声明，类型为对象key对应的值类型;

- in: key in Type -> Type 中存在 key

- never 不存在

- 其他： if instanceof == !== 三目 ...


## Type Muanipulation 类型操作
- T 泛型

- keyof T, 返回 T 的全部key;

- typeof T, 返回 T 的类型;

- 索引取值: 用于数组 / 对象
    ```ts
        type Person = { age: number; name: string; alive: boolean };
        type Age = Person["age"];
        // Age = number
        type I1 = Person["age" | "name"];
        // I1 = string | number
    ```

## Utility Types 实用的工具类型
- Partial<Type>, 将 Type 内的key 都变为可选;

- Required<Type>, 将 Type 内的 key 都变为必选;

- Readonly<Type>, 将 Type 内的 key 都变为只读;

- Record<Keys, Type>, 将 Keys 作为对象的 key, Type作为对象 key 对应的值的类型;
    ```ts
        interface CatInfo {
            age: number;
            breed: string;
        }
        
        type CatName = "miffy" | "boris";
        
        const cats: Record<CatName, CatInfo> = {
            miffy: { age: 10, breed: "Persian" },
            boris: { age: 5, breed: "Maine Coon" }
        };
    ```

- Pick<Type, 'key' | 'key2'>, 从T中挑选指定参数生成; 

- Omit<Type, 'key' | 'key2'>, 从T中剔除指定参数生成; 

- Exclude<UnionType, ExcludedMembers> 排除 UnionType 类型内的 ExcludedMembers 部分
    ```ts
        type T0 = Exclude<"a" | "b" | "c", "a">;
        // T0 = "b" | "c"
    ```

- Extract<Type, Union> 从 Type 中提取 Union中有的值
    ```ts
        type T0 = Extract<"a" | "b" | "c", "a" | "f">;
        // T0 = "a"
    ```

- NonNullable<Type> 从 Type 中提取非空对象
    ```ts
        type T0 = NonNullable<string | number | undefined | null>;
        // T0 = string | number
    ```
- ReturnType<Type> 返回 函数 返回值的类型
    ```ts
        function f1(): { a: number; b: string };
        type T4 = ReturnType<typeof f1>;
        // T4 = {
        //    a: number;
        //    b: string;
        //}

        type T0 = ReturnType<() => string>;
        // T0 = string
    ```
