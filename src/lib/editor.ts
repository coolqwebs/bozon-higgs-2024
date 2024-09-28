export const langStarterCode = {
  javascript: `function add(a, b) {\n  return a + b;\n}`,
  python: "print('Hello World!')",
  csharp: `using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("Hello World!");
        Console.ReadKey();
    }
} `,
  java: `class Solution
{
    public static void main(String []args)
    {
        System.out.println("My First Java Program.");
    }
};
  `,
  cpp: `#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}`,
  fsharp: `printfn "Hello from F#"`,
  swift: `print("Hello from Swift") `,
};

export const compilerLangueges = [
  {
    id: 13,
    name: "GNU C++14",
    isLocked: false,
    extensions: ".cpp",
  },
  {
    id: 27,
    name: "GNU C++17 (x64)",
    isLocked: false,
    extensions: ".cpp",
  },
  {
    id: 17,
    name: "VC++ 2017",
    isLocked: false,
    extensions: ".cpp",
  },
  {
    id: 26,
    name: "C# (.NET 7)",
    isLocked: false,
    extensions: ".cs",
  },
  {
    id: 11,
    name: "F# 3.0",
    isLocked: false,
    extensions: ".fs",
  },
  {
    id: 3,
    name: "Java",
    isLocked: false,
    extensions: ".java",
  },
  {
    id: 22,
    name: "NodeJS v14.5.0",
    isLocked: false,
    extensions: ".js",
  },
  {
    id: 19,
    name: "Kotlin 1.37.2",
    isLocked: false,
    extensions: ".kt",
  },
  {
    id: 8,
    name: "Free Pascal",
    isLocked: false,
    extensions: ".pas;.dpr",
  },
  {
    id: 29,
    name: "Python 3.11.x x64",
    isLocked: false,
    extensions: ".py",
  },
  {
    id: 24,
    name: "Swift v4.1.3",
    isLocked: false,
    extensions: ".swift",
  },
];

export const getTargetByLang = (lang: string): number => {
  switch (lang) {
    case "javascript":
      return 22;
    case "python":
      return 29;
    case "csharp":
      return 26;
    case "java":
      return 3;
    case "cpp":
      return 27;
    case "fsharp":
      return 11;
    case "swift":
      return 24;
    default:
      return 22;
  }
};

export const compilerResponse = [
  {
    Id: 0,
    Name: "InternalError",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 1,
    Name: "Received",
    IsFinal: false,
    IsVisible: false,
  },
  {
    Id: 2,
    Name: "Compiling",
    IsFinal: false,
    IsVisible: false,
  },
  {
    Id: 3,
    Name: "Running",
    IsFinal: false,
    IsVisible: false,
  },
  {
    Id: 4,
    Name: "Compile Error",
    IsFinal: true,
    IsVisible: false,
  },
  {
    Id: 5,
    Name: "Run-Time Error",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 6,
    Name: "Time Limit Exceeded",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 7,
    Name: "Memory Limit Exceeded",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 8,
    Name: "Output Limit Exceeded",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 9,
    Name: "Security Violation",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 10,
    Name: "Wrong Answer",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 11,
    Name: "Accepted",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 12,
    Name: "Waiting For Compile",
    IsFinal: false,
    IsVisible: false,
  },
  {
    Id: 13,
    Name: "Waiting For Run",
    IsFinal: false,
    IsVisible: false,
  },
  {
    Id: 14,
    Name: "Presentation Error",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 15,
    Name: "Partial Solution",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 16,
    Name: "Rejected",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 17,
    Name: "Disqualified",
    IsFinal: true,
    IsVisible: true,
  },
  {
    Id: 18,
    Name: "Idleness Limit Exceeded",
    IsFinal: true,
    IsVisible: true,
  },
];

export const getStatusById = (id: number) => {
  return compilerResponse.find((item) => item.Id === id)?.Name;
};
