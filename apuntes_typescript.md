
## 🔠 Tipado Básico

```ts
let y: number = "john"     // ❌ Error
let y: number = 12         // ✅ Correcto

let x: string = 12         // ❌ Error
let x: string = "john"     // ✅ Correcto
```

---

## ⚙️ Tipado en Funciones

```ts
function sumar(a: number, b: number): number {
  return a + b;
}

sumar(2, "3"); // ❌ Error
sumar(2, 3);   // ✅ Correcto
```

---

## ❓ Parámetros Opcionales

```ts
function saludar(nombre?: string) {
  console.log(\`Hola \${nombre || "bro"}\`);
}

saludar();         // Hola bro
saludar("John");   // Hola John
```

> El `?` hace que el parámetro sea opcional.

---

## 🧱 Interfaces

```ts
interface IPersona {
  nombre: string;
  edad: number;
}

const persona: IPersona = {
  nombre: "John Doe",
  edad: 23
};

persona.email = "123@gmail.com"; // ❌ Error, no está en la interfaz
```

> Las interfaces definen la **forma** de un objeto. Solo podés usar las propiedades declaradas.

---

## 🔢 Arrays Tipados

```ts
let numeros: number[] = [1, 2, 3];
// numeros.push("4");  // ❌ Error
numeros.push(4);       // ✅ Correcto
```

---

## 🌀 Tipos Mixtos (Uniones)

```ts
let mixto: (string | number)[] = [1, "dos"];
let id: string | number;

id = 23;      // ✅
id = "hola";  // ✅
id = true;    // ❌ Error
```

> Usamos `|` para permitir más de un tipo.

---

## 🎭 Type Alias

```ts
type ID = string | number;

let userId: ID = 123;
userId = "abc";
userId = true; // ❌ Error
```

> Sirve para nombrar combinaciones de tipos y reutilizarlos.

---

## 📦 Tipos Literales

```ts
let rol: "admin" | "user";

rol = "admin";  // ✅
rol = "guest";  // ❌ Error
```

> Solo se pueden usar los valores definidos.

---

## ✅ Type Inference (Inferencia de tipo)

```ts
let mensaje = "hola"; // TypeScript asume que es string
mensaje = 123;        // ❌ Error
```

> No siempre necesitás escribir el tipo, TypeScript lo detecta automáticamente.

---

## 🧪 Any (Evitarlo)

```ts
let algo: any = "hola";
algo = 123;
algo = true;
```

> El tipo `any` desactiva el chequeo de tipos. Solo usarlo si no hay alternativa.

---

## 🧰 Never y Void

```ts
function error(): never {
  throw new Error("Algo salió mal");
}

function log(): void {
  console.log("Hola mundo");
}
```

> `void`: no devuelve nada  
> `never`: nunca llega a devolver (error o loop infinito)
