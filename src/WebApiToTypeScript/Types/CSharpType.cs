﻿using Mono.Cecil;

namespace WebApiToTypeScript.Types
{
    public class CSharpType
    {
        public TypeDefinition TypeDefinition { get; set; }
        public bool IsCollection { get; set; }
    }
}