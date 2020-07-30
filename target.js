var pxtTargetBundle = {
    "id": "sample",
    "name": "sample",
    "title": "MakeCode Editor Sample",
    "corepkg": "core",
    "cloud": {
        "workspace": false,
        "packages": true
    },
    "bundleddirs": [
        "libs/core"
    ],
    "runtime": {
        "mathBlocks": true,
        "loopsBlocks": true,
        "logicBlocks": true,
        "variablesBlocks": true,
        "textBlocks": false,
        "functionBlocks": false,
        "listsBlocks": false
    },
    "simulator": {
        "autoRun": true
    },
    "appTheme": {
        "logoUrl": "https://github.com/Microsoft/pxt-sample",
        "homeUrl": "/pxt-sample/",
        "privacyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
        "termsOfUseUrl": "https://go.microsoft.com/fwlink/?LinkID=206977",
        "betaUrl": "https://makecode.com/",
        "docMenu": [
            {
                "name": "About",
                "path": "/pxt-sample/docs/about"
            },
            {
                "name": "Docs",
                "path": "/pxt-sample/docs/docs"
            }
        ],
        "coloredToolbox": false,
        "monacoToolbox": true,
        "invertedMenu": true,
        "showHomeScreen": true,
        "homeScreenHero": "docs/static/hero.png",
        "blocklyOptions": {
            "grid": {
                "spacing": 45,
                "length": 7,
                "colour": "rgba(189, 195, 199, 0.30)",
                "snap": true
            }
        },
        "simAnimationEnter": "fly right in",
        "simAnimationExit": "fly right out",
        "scriptManager": true,
        "debugger": true,
        "print": true,
        "highContrast": true,
        "python": true,
        "greenScreen": true,
        "monacoColors": {
            "editor.background": "#ecf0f1"
        },
        "TOC": [
            {
                "name": "About",
                "path": "/about",
                "subitems": []
            },
            {
                "name": "FAQ",
                "path": "/faq",
                "subitems": []
            },
            {
                "name": "Projects",
                "path": "/projects",
                "subitems": []
            },
            {
                "name": "GitHub",
                "path": "/github",
                "subitems": []
            },
            {
                "name": "Blocks",
                "path": "/blocks",
                "subitems": [
                    {
                        "name": "On Start",
                        "path": "/blocks/on-start",
                        "subitems": []
                    },
                    {
                        "name": "Loops",
                        "path": "/blocks/loops",
                        "subitems": [
                            {
                                "name": "repeat",
                                "path": "/blocks/loops/repeat",
                                "subitems": []
                            },
                            {
                                "name": "for",
                                "path": "/blocks/loops/for",
                                "subitems": []
                            },
                            {
                                "name": "while",
                                "path": "/blocks/loops/while",
                                "subitems": []
                            },
                            {
                                "name": "for of",
                                "path": "/blocks/loops/for-of",
                                "subitems": []
                            }
                        ]
                    },
                    {
                        "name": "Logic",
                        "path": "/blocks/logic",
                        "subitems": [
                            {
                                "name": "if",
                                "path": "/blocks/logic/if",
                                "subitems": []
                            },
                            {
                                "name": "Boolean",
                                "path": "/blocks/logic/boolean",
                                "subitems": []
                            }
                        ]
                    },
                    {
                        "name": "Variables",
                        "path": "/blocks/variables",
                        "subitems": [
                            {
                                "name": "assign",
                                "path": "/blocks/variables/assign",
                                "subitems": []
                            },
                            {
                                "name": "change var",
                                "path": "/blocks/variables/change",
                                "subitems": []
                            },
                            {
                                "name": "var",
                                "path": "/blocks/variables/var",
                                "subitems": []
                            }
                        ]
                    },
                    {
                        "name": "Math",
                        "path": "/blocks/math",
                        "subitems": []
                    },
                    {
                        "name": "JavaScript blocks",
                        "path": "/blocks/javascript-blocks",
                        "subitems": []
                    },
                    {
                        "name": "Custom blocks",
                        "path": "/blocks/custom",
                        "subitems": []
                    }
                ]
            },
            {
                "name": "Python",
                "path": "/python",
                "subitems": [
                    {
                        "name": "Calling",
                        "path": "/python/call",
                        "subitems": []
                    },
                    {
                        "name": "Sequencing",
                        "path": "/python/sequence",
                        "subitems": []
                    },
                    {
                        "name": "Variables",
                        "path": "/python/variables",
                        "subitems": []
                    },
                    {
                        "name": "Operators",
                        "path": "/python/operators",
                        "subitems": []
                    },
                    {
                        "name": "Statements",
                        "path": "/python/statements",
                        "subitems": []
                    },
                    {
                        "name": "Functions",
                        "path": "/python/functions",
                        "subitems": []
                    },
                    {
                        "name": "Classes",
                        "path": "/python/classes",
                        "subitems": []
                    }
                ]
            },
            {
                "name": "JavaScript",
                "path": "/javascript",
                "subitems": [
                    {
                        "name": "Calling",
                        "path": "/javascript/call",
                        "subitems": []
                    },
                    {
                        "name": "Sequencing",
                        "path": "/javascript/sequence",
                        "subitems": []
                    },
                    {
                        "name": "Variables",
                        "path": "/javascript/variables",
                        "subitems": []
                    },
                    {
                        "name": "Operators",
                        "path": "/javascript/operators",
                        "subitems": []
                    },
                    {
                        "name": "Statements",
                        "path": "/javascript/statements",
                        "subitems": []
                    },
                    {
                        "name": "Functions",
                        "path": "/javascript/functions",
                        "subitems": []
                    },
                    {
                        "name": "Types",
                        "path": "/javascript/types",
                        "subitems": []
                    },
                    {
                        "name": "Classes",
                        "path": "/javascript/classes",
                        "subitems": []
                    },
                    {
                        "name": "Interfaces",
                        "path": "/javascript/interfaces",
                        "subitems": []
                    },
                    {
                        "name": "Generics",
                        "path": "/javascript/generics",
                        "subitems": []
                    }
                ]
            },
            {
                "name": "Types",
                "path": "/types",
                "subitems": [
                    {
                        "name": "Number",
                        "path": "/types/number",
                        "subitems": []
                    },
                    {
                        "name": "String",
                        "path": "/types/string",
                        "subitems": []
                    },
                    {
                        "name": "Boolean",
                        "path": "/types/boolean",
                        "subitems": []
                    },
                    {
                        "name": "Array",
                        "path": "/types/array",
                        "subitems": []
                    },
                    {
                        "name": "Function",
                        "path": "/types/function",
                        "subitems": []
                    }
                ]
            },
            {
                "name": "Miscellaneous",
                "path": "",
                "subitems": [
                    {
                        "name": "About",
                        "path": "/about",
                        "subitems": []
                    },
                    {
                        "name": "Support",
                        "path": "/support",
                        "subitems": []
                    },
                    {
                        "name": "Translate",
                        "path": "/translate",
                        "subitems": []
                    },
                    {
                        "name": "Sharing projects",
                        "path": "/share",
                        "subitems": []
                    },
                    {
                        "name": "Offline support",
                        "path": "/offline",
                        "subitems": []
                    },
                    {
                        "name": "Save",
                        "path": "/save",
                        "subitems": []
                    }
                ]
            },
            {
                "name": "Developers",
                "path": "",
                "subitems": [
                    {
                        "name": "Command Line Interface",
                        "path": "/cli",
                        "subitems": []
                    },
                    {
                        "name": "Visual Studio Code support",
                        "path": "/code",
                        "subitems": []
                    },
                    {
                        "name": "Blocks Embed",
                        "path": "/blocks-embed",
                        "subitems": []
                    }
                ]
            }
        ],
        "embedUrl": "http://microsoft.github.io/pxt-sample/",
        "id": "sample",
        "title": "MakeCode Editor Sample",
        "name": "sample",
        "htmlDocIncludes": {}
    },
    "versions": {
        "target": "2.0.2",
        "pxt": "6.2.5"
    },
    "blocksprj": {
        "id": "blocksprj",
        "config": {
            "name": "{0}",
            "dependencies": {
                "core": "*"
            },
            "description": "",
            "files": [
                "main.blocks",
                "main.ts",
                "README.md"
            ],
            "additionalFilePaths": []
        },
        "files": {
            "README.md": " ",
            "main.blocks": "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n</xml>",
            "main.ts": " "
        }
    },
    "tsprj": {
        "id": "tsprj",
        "config": {
            "name": "{0}",
            "dependencies": {
                "core": "*"
            },
            "description": "",
            "files": [
                "main.ts",
                "README.md"
            ],
            "additionalFilePaths": []
        },
        "files": {
            "README.md": " ",
            "main.ts": " "
        }
    },
    "bundledpkgs": {
        "core": {
            "README.md": "# basic\n\nAdd your docs here...",
            "enums.d.ts": "declare const enum Direction {\n    //% block=left\n    Left,\n    //% block=right\n    Right\n}\n\ndeclare const enum Hop {\n    //% block=short\n    Short,\n    //% block=long\n    Long,\n    //% block=silly\n    Silly,\n    //% block=wow\n    Incredible,\n    //% block=\"to the moon!\"\n    Astronomical\n}\n\n\n",
            "ns.ts": "/**\n * Basic functionalities.\n */\n//% color=#00BCD4 weight=100\nnamespace turtle {\n\n}\n\n//% color=#D4BC00 weight=95\nnamespace hare {\n\n}\n\n/**\n * Control flow\n */\n//% color=#FF5722 weight=90\nnamespace control {\n\n}\n",
            "pxt-core.d.ts": "/// <reference no-default-lib=\"true\"/>\n\ninterface Array<T> {\n    /**\n      * Get or set the length of an array. This number is one more than the index of the last element the array.\n      */\n    //% shim=Array_::length weight=84\n    //% blockId=\"lists_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"arrays\"\n    length: number;\n\n    /**\n      * Append a new element to an array.\n      * @param items New elements of the Array.\n      */\n    //% help=arrays/push\n    //% shim=Array_::push weight=50\n    //% blockId=\"array_push\" block=\"%list| add value %value| to end\" blockNamespace=\"arrays\"\n    //% group=\"Modify\"\n    push(item: T): void;\n\n    /**\n      * Concatenates the values with another array.\n      * @param arr The other array that is being concatenated with\n      */\n    //% helper=arrayConcat weight=40\n    concat(arr: T[]): T[];\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=45\n    //% blockId=\"array_pop\" block=\"get and remove last value from %list\" blockNamespace=\"arrays\"\n    //% group=\"Read\"\n    pop(): T;\n\n    /**\n      * Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.\n      */\n    //% help=arrays/reverse\n    //% helper=arrayReverse weight=10\n    //% blockId=\"array_reverse\" block=\"reverse %list\" blockNamespace=\"arrays\"\n    //% group=\"Operations\"\n    reverse(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=30\n    //% blockId=\"array_shift\" block=\"get and remove first value from %list\" blockNamespace=\"arrays\"\n    //% group=\"Read\"\n    shift(): T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=25\n    //% blockId=\"array_unshift\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //% group=\"Modify\"\n    //unshift(...values:T[]): number; //rest is not supported in our compiler yet.\n    unshift(value: T): number;\n\n    /**\n      * Return a section of an array.\n      * @param start The beginning of the specified portion of the array. eg: 0\n      * @param end The end of the specified portion of the array. eg: 0\n      */\n    //% help=arrays/slice\n    //% helper=arraySlice weight=41 blockNamespace=\"arrays\"\n    slice(start?: number, end?: number): T[];\n\n    /**\n      * Remove elements from an array.\n      * @param start The zero-based location in the array from which to start removing elements. eg: 0\n      * @param deleteCount The number of elements to remove. eg: 0\n      */\n    //% helper=arraySplice weight=40\n    splice(start: number, deleteCount: number): void;\n\n    /**\n      * joins all elements of an array into a string and returns this string.\n      * @param sep the string separator\n      */\n    //% helper=arrayJoin weight=40\n    join(sep?: string): string;\n\n    /**\n      * Tests whether at least one element in the array passes the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arraySome weight=40\n    some(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Tests whether all elements in the array pass the test implemented by the provided function.\n      * @param callbackfn A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayEvery weight=40\n    every(callbackfn: (value: T, index: number) => boolean): boolean;\n\n    /**\n      * Sort the elements of an array in place and returns the array. The sort is not necessarily stable.\n      * @param specifies a function that defines the sort order. If omitted, the array is sorted according to the prmitive type\n      */\n    //% helper=arraySort weight=40\n    sort(callbackfn?: (value1: T, value2: T) => number): T[];\n\n    /**\n      * Call a defined callback function on each element of an array, and return an array containing the results.\n      * @param callbackfn A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayMap weight=40\n    map<U>(callbackfn: (value: T, index: number) => U): U[];\n\n    /**\n      * Call a defined callback function on each element of an array.\n      * @param callbackfn A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayForEach weight=40\n    forEach(callbackfn: (value: T, index: number) => void): void;\n\n    /**\n      * Return the elements of an array that meet the condition specified in a callback function.\n      * @param callbackfn A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.\n      */\n    //% helper=arrayFilter weight=40\n    filter(callbackfn: (value: T, index: number) => boolean): T[];\n\n    /**\n      * Fills all the elements of an array from a start index to an end index with a static value. The end index is not included.\n      */\n    //% helper=arrayFill weight=39\n    fill(value: T, start?: number, end?: number): T[];\n\n    /**\n     * Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.\n     * @param callbackfn\n     */\n    //% helper=arrayFind weight=40\n    find(callbackfn: (value: T, index: number) => boolean): T;\n\n    /**\n      * Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n      * @param callbackfn A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.\n      * @param initialValue Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n      */\n    //% helper=arrayReduce weight=40\n    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U;\n\n\n    /** Remove the first occurence of an object. Returns true if removed. */\n    //% shim=Array_::removeElement weight=48\n    removeElement(element: T): boolean;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=47\n    //% blockId=\"array_removeat\" block=\"%list| get and remove value at %index\" blockNamespace=\"arrays\"\n    //% group=\"Read\"\n    removeAt(index: number): T;\n\n    /**\n     * Insert the value at a particular index, increases length by 1\n     * @param index the zero-based position in the list to insert the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/insert-at\n    //% shim=Array_::insertAt weight=20\n    //% blockId=\"array_insertAt\" block=\"%list| insert at %index| value %value\" blockNamespace=\"arrays\"\n    //% group=\"Modify\"\n    insertAt(index: number, value: T): void;\n\n    /**\n      * Return the index of the first occurrence of a value in an array.\n      * @param item The value to locate in the array.\n      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.\n      */\n    //% help=arrays/index-of\n    //% shim=Array_::indexOf weight=40\n    //% blockId=\"array_indexof\" block=\"%list| find index of %value\" blockNamespace=\"arrays\"\n    //% group=\"Operations\"\n    indexOf(item: T, fromIndex?: number): number;\n\n    /**\n     * Get the value at a particular index\n     * @param index the zero-based position in the list of the item, eg: 0\n     */\n    //% help=arrays/get\n    //% shim=Array_::getAt weight=85\n    get(index: number): T;\n\n    /**\n     * Store a value at a particular index\n     * @param index the zero-based position in the list to store the value, eg: 0\n     * @param the value to insert, eg: 0\n     */\n    //% help=arrays/set\n    //% shim=Array_::setAt weight=84\n    set(index: number, value: T): void;\n\n    [n: number]: T;\n\n    /**\n      * Add one element to the beginning of an array and return the new length of the array.\n      * @param element to insert at the start of the Array.\n      */\n    //% help=arrays/unshift\n    //% helper=arrayUnshift weight=24\n    //% blockId=\"array_unshift_statement\" block=\"%list| insert %value| at beginning\" blockNamespace=\"arrays\"\n    //% blockAliasFor=\"Array.unshift\"\n    //% group=\"Modify\"\n    _unshiftStatement(value: T): void;\n\n    /**\n      * Remove the last element from an array and return it.\n      */\n    //% help=arrays/pop\n    //% shim=Array_::pop weight=44\n    //% blockId=\"array_pop_statement\" block=\"remove last value from %list\" blockNamespace=\"arrays\"\n    //% blockAliasFor=\"Array.pop\"\n    //% group=\"Modify\"\n    _popStatement(): void;\n\n    /**\n      * Remove the first element from an array and return it. This method changes the length of the array.\n      */\n    //% help=arrays/shift\n    //% helper=arrayShift weight=29\n    //% blockId=\"array_shift_statement\" block=\"remove first value from %list\" blockNamespace=\"arrays\"\n    //% blockAliasFor=\"Array.shift\"\n    //% group=\"Modify\"\n    _shiftStatement(): void;\n\n    /** Remove the element at a certain index. */\n    //% help=arrays/remove-at\n    //% shim=Array_::removeAt weight=14\n    //% blockId=\"array_removeat_statement\" block=\"%list| remove value at %index\" blockNamespace=\"arrays\"\n    //% blockAliasFor=\"Array.removeAt\"\n    //% group=\"Modify\"\n    _removeAtStatement(index: number): void;\n}\n\ndeclare interface String {\n    // This block is currently disabled in favor of the built-in Blockly \"Create text with\" block, which compiles to \"\" + \"\"\n    // Add % sign back to the block annotation to re-enable\n    /**\n     * Returns a string that contains the concatenation of two or more strings.\n     * @param other The string to append to the end of the string.\n     */\n    //% shim=String_::concat weight=49\n    //% blockId=\"string_concat\" blockNamespace=\"text\"\n    // block=\"join %list=text|%other\"\n    concat(other: string): string;\n\n    /**\n     * Return the character at the specified index.\n     * @param index The zero-based index of the desired character.\n     */\n    //% shim=String_::charAt weight=48\n    //% help=text/char-at\n    //% blockId=\"string_get\" block=\"char from %this=text|at %pos\" blockNamespace=\"text\"\n    charAt(index: number): string;\n\n    /** Returns the length of a String object. */\n    //% property shim=String_::length weight=47\n    //% blockId=\"text_length\" block=\"length of %VALUE\" blockBuiltin=true blockNamespace=\"text\"\n    length: number;\n\n    /**\n     * Return the Unicode value of the character at the specified location.\n     * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.\n     */\n    //% shim=String_::charCodeAt\n    charCodeAt(index: number): number;\n\n    /**\n     * See how the order of characters in two strings is different (in ASCII encoding).\n     * @param that String to compare to target string\n     */\n    //% shim=String_::compare\n    //% help=text/compare\n    //% blockId=\"string_compare\" block=\"compare %this=text| to %that\" blockNamespace=\"text\"\n    compare(that: string): number;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param length number of characters to extract\n     */\n    //% shim=String_::substr length.defl=10\n    //% help=text/substr\n    //% blockId=\"string_substr\" block=\"substring of %this=text|from %start|of length %length\" blockNamespace=\"text\"\n    substr(start: number, length?: number): string;\n\n    /**\n     * Return the current string with the first occurence of toReplace\n     * replaced with the replacer\n     * @param toReplace the substring to replace in the current string\n     * @param replacer either the string that replaces toReplace in the current string,\n     *                or a function that accepts the substring and returns the replacement string.\n     */\n    //% helper=stringReplace\n    replace(toReplace: string, replacer: string | ((sub: string) => string)): string;\n\n    /**\n     * Return the current string with each occurence of toReplace\n     * replaced with the replacer\n     * @param toReplace the substring to replace in the current string\n     * @param replacer either the string that replaces toReplace in the current string,\n     *                or a function that accepts the substring and returns the replacement string.\n     */\n    //% helper=stringReplaceAll\n    replaceAll(toReplace: string, replacer: string | ((sub: string) => string)): string;\n\n    /**\n     * Return a substring of the current string.\n     * @param start first character index; can be negative from counting from the end, eg:0\n     * @param end one-past-last character index\n     */\n    //% helper=stringSlice\n    slice(start: number, end?: number): string;\n\n    /** Returns a value indicating if the string is empty */\n    //% helper=stringEmpty\n    //% blockId=\"string_isempty\" blockNamespace=\"text\"\n    //% block=\"%this=text| is empty\"\n    isEmpty(): boolean;\n\n    /**\n     * Returns the position of the first occurrence of a specified value in a string.\n     * @param searchValue the text to find\n     * @param start optional start index for the search\n     */\n    //% shim=String_::indexOf\n    //% help=text/index-of\n    //% blockId=\"string_indexof\" blockNamespace=\"text\"\n    //% block=\"%this=text|find index of %searchValue\"\n    indexOf(searchValue: string, start?: number): number;\n\n    /**\n     * Determines whether a string contains the characters of a specified string.\n     * @param searchValue the text to find\n     * @param start optional start index for the search\n     */\n    //% shim=String_::includes\n    //% help=text/includes\n    //% blockId=\"string_includes\" blockNamespace=\"text\"\n    //% block=\"%this=text|includes %searchValue\"\n    includes(searchValue: string, start?: number): boolean;\n\n    /**\n     * Splits the string according to the separators\n     * @param separator\n     * @param limit\n     */\n    //% helper=stringSplit\n    //% help=text/split\n    //% blockId=\"string_split\" blockNamespace=\"text\"\n    //% block=\"split %this=text|at %separator\"\n    split(separator?: string, limit?: number): string[];\n\n    /**\n     * Return a substring of the current string with whitespace removed from both ends\n     */\n    trim(): string;\n\n    /**\n     * Converts the string to lower case characters.\n     */\n    //% helper=stringToLowerCase\n    //% help=text/to-lower-case\n    toLowerCase(): string;\n\n    [index: number]: string;\n}\n\n/**\n  * Convert a string to a number.\n  * @param s A string to convert into a number. eg: 123\n  */\n//% shim=String_::toNumber\n//% help=text/parse-float\n//% blockId=\"string_parsefloat\" block=\"parse to number %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\ndeclare function parseFloat(text: string): number;\n\n/**\n * Returns a pseudorandom number between min and max included.\n * If both numbers are integral, the result is integral.\n * @param min the lower inclusive bound, eg: 0\n * @param max the upper inclusive bound, eg: 10\n */\n//% blockId=\"device_random\" block=\"pick random %min|to %limit\"\n//% blockNamespace=\"Math\"\n//% help=math/randint\n//% shim=Math_::randomRange\ndeclare function randint(min: number, max: number): number;\n\ninterface Object { }\ninterface Function {\n  __assignableToFunction: Function;\n}\ninterface IArguments { \n  __assignableToIArguments: IArguments;\n}\ninterface RegExp { \n  __assignableToRegExp: RegExp;\n}\ntype TemplateStringsArray = Array<string>;\n\ntype uint8 = number;\ntype uint16 = number;\ntype uint32 = number;\ntype int8 = number;\ntype int16 = number;\ntype int32 = number;\n\n\ndeclare interface Boolean {\n    /**\n     * Returns a string representation of an object.\n     */\n    //% shim=numops::toString\n    toString(): string;\n}\n\n/**\n * Combine, split, and search text strings.\n*/\n//% blockNamespace=\"text\"\ndeclare namespace String {\n\n    /**\n     * Make a string from the given ASCII character code.\n     */\n    //% help=math/from-char-code\n    //% shim=String_::fromCharCode weight=1\n    //% blockNamespace=\"text\" blockId=\"stringFromCharCode\" block=\"text from char code %code\"\n    function fromCharCode(code: number): string;\n}\n\ndeclare interface Number {\n    /**\n     * Returns a string representation of a number.\n     */\n    //% shim=numops::toString\n    toString(): string;\n}\n\n/**\n * Add, remove, and replace items in lists.\n*/\n//% blockNamespace=\"Arrays\"\ndeclare namespace Array {\n    /**\n     * Check if a given object is an array.\n     */\n    //% shim=Array_::isArray\n    function isArray(obj: any): boolean;\n}\n\ndeclare namespace Object {\n    /**\n     * Return the field names in an object.\n     */\n    //% shim=pxtrt::keysOf\n    function keys(obj: any): string[];\n}\n\n/**\n * More complex operations with numbers.\n*/\ndeclare namespace Math {\n    /**\n     * Returns the value of a base expression taken to a specified power.\n     * @param x The base value of the expression.\n     * @param y The exponent value of the expression.\n     */\n    //% shim=Math_::pow\n    function pow(x: number, y: number): number;\n\n    /**\n     * Returns a pseudorandom number between 0 and 1.\n     */\n    //% shim=Math_::random\n    //% help=math/random\n    function random(): number;\n\n    /**\n     * Returns a pseudorandom number between min and max included.\n     * If both numbers are integral, the result is integral.\n     * @param min the lower inclusive bound, eg: 0\n     * @param max the upper inclusive bound, eg: 10\n     */\n    //% blockId=\"device_random_deprecated\" block=\"pick random %min|to %limit\"\n    //% help=math/random-range deprecated\n    //% shim=Math_::randomRange\n    function randomRange(min: number, max: number): number;\n\n    /**\n     * Returns the natural logarithm (base e) of a number.\n     * @param x A number\n     */\n    //% shim=Math_::log\n    function log(x: number): number;\n\n    /**\n     * Returns returns ``e^x``.\n     * @param x A number\n     */\n    //% shim=Math_::exp\n    function exp(x: number): number;\n\n    /**\n     * Returns the sine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::sin\n    //% help=math/trigonometry\n    function sin(x: number): number;\n\n    /**\n     * Returns the cosine of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::cos\n    //% help=math/trigonometry\n    function cos(x: number): number;\n\n    /**\n     * Returns the tangent of a number.\n     * @param x An angle in radians\n     */\n    //% shim=Math_::tan\n    function tan(x: number): number;\n\n    /**\n     * Returns the arcsine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::asin\n    function asin(x: number): number;\n\n    /**\n     * Returns the arccosine (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::acos\n    function acos(x: number): number;\n\n    /**\n     * Returns the arctangent (in radians) of a number\n     * @param x A number\n     */\n    //% shim=Math_::atan\n    function atan(x: number): number;\n\n    /**\n     * Returns the arctangent of the quotient of its arguments.\n     * @param y A number\n     * @param x A number\n     */\n    //% shim=Math_::atan2\n    function atan2(y: number, x: number): number;\n\n    /**\n     * Returns the square root of a number.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::sqrt\n    function sqrt(x: number): number;\n\n    /**\n     * Returns the smallest number greater than or equal to its numeric argument.\n     * @param x A numeric expression.\n     */\n    //% shim=Math_::ceil\n      //% help=math\n    function ceil(x: number): number;\n\n    /**\n      * Returns the greatest number less than or equal to its numeric argument.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::floor\n      //% help=math\n    function floor(x: number): number;\n\n    /**\n      * Returns the number with the decimal part truncated.\n      * @param x A numeric expression.\n      */\n    //% shim=Math_::trunc\n    //% help=math\n    function trunc(x: number): number;\n\n    /**\n      * Returns a supplied numeric expression rounded to the nearest number.\n      * @param x The value to be rounded to the nearest number.\n      */\n    //% shim=Math_::round\n    //% help=math\n    function round(x: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit multiplication of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::imul\n    function imul(x: number, y: number): number;\n\n    /**\n     * Returns the value of integer signed 32 bit division of two numbers.\n     * @param x The first number\n     * @param y The second number\n     */\n    //% shim=Math_::idiv\n    function idiv(x: number, y: number): number;\n}\n\ndeclare namespace control {\n    //% shim=_control::_onCodeStart\n    export function _onCodeStart(arg: any): void;\n\n    //% shim=_control::_onCodeStop\n    export function _onCodeStop(arg: any): void;\n}",
            "pxt-helpers.ts": "type Action = () => void;\n\n/**\n * Constant representing Not-A-Number.\n */\nconst NaN = 0 / 0\n\n/**\n * Constant representing positive infinity.\n */\nconst Infinity = 1 / 0\n\nfunction isNaN(x: number) {\n    x = +x // convert to number\n    return x !== x\n}\n\nnamespace Number {\n    /**\n     * Check if a given value is of type Number and it is a NaN.\n     */\n    export function isNaN(x: any): boolean {\n        return typeof x == \"number\" && x !== x\n    }\n}\n\n/**\n * A dictionary from string key to string values\n */\ninterface StringMap {\n    [index: string]: string;\n}\n\n/**\n  * Convert a string to an integer.\n  * @param text A string to convert into an integral number. eg: \"123\"\n  * @param radix optional A value between 2 and 36 that specifies the base of the number in text.\n  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.\n  * All other strings are considered decimal.\n  */\n//% help=text/parse-int\n//% blockId=\"string_parseint\" block=\"parse to integer %text\" blockNamespace=\"text\"\n//% text.defl=\"123\"\n//% blockHidden=1\nfunction parseInt(text: string, radix?: number): number {\n    // roughly based on https://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.2\n    // with some consideration for avoiding unnecessary slices where easy\n    if (!text || (radix != null && (radix < 2 || radix > 36)))\n        return NaN;\n\n    let start = 0;\n    while (start < text.length && helpers.isWhitespace(text.charCodeAt(start)))\n        ++start;\n\n    if (start === text.length)\n        return NaN;\n\n    const numberOffset = 48; // 0\n    const numCount = 10;\n    const letterOffset = 97; // a\n    const letterCount = 26;\n    const lowerCaseMask = 0x20;\n\n    let sign = 1;\n    switch (text.charAt(start)) {\n        case \"-\":\n            sign = -1;\n            // fallthrough\n        case \"+\":\n            ++start;\n    }\n\n    if ((!radix || radix == 16)\n            && \"0\" === text[start]\n            && (\"x\" === text[start + 1] || \"X\" === text[start + 1])) {\n        radix = 16;\n        start += 2;\n    } else if (!radix) {\n        radix = 10;\n    }\n\n    let output = 0;\n    let hasDigit = false;\n    for (let i = start; i < text.length; ++i) {\n        const code = text.charCodeAt(i) | lowerCaseMask;\n        let val: number = undefined;\n\n        if (code >= numberOffset && code < numberOffset + numCount)\n            val = code - numberOffset;\n        else if (code >= letterOffset && code < letterOffset + letterCount)\n            val = numCount + code - letterOffset;\n\n        if (val == undefined || val >= radix) {\n            if (!hasDigit) {\n                return NaN;\n            }\n            break;\n        }\n        hasDigit = true;\n        output = output * radix + val;\n    }\n\n    return sign * output;\n}\n\nnamespace helpers {\n    export function arrayFill<T>(O: T[], value: T, start?: number, end?: number) {\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill\n        // Steps 3-5.\n        const len = O.length >>> 0;\n\n        // Steps 6-7.\n        const relativeStart = start === undefined ? 0 : start >> 0;\n\n        // Step 8.\n        let k = relativeStart < 0 ?\n            Math.max(len + relativeStart, 0) :\n            Math.min(relativeStart, len);\n\n        // Steps 9-10.\n        const relativeEnd = end === undefined ? len : end >> 0;\n\n        // Step 11.\n        const final = relativeEnd < 0 ?\n            Math.max(len + relativeEnd, 0) :\n            Math.min(relativeEnd, len);\n\n        // Step 12.\n        while (k < final) {\n            O[k] = value;\n            k++;\n        }\n\n        // Step 13.\n        return O;\n    }\n\n    export function arraySplice<T>(arr: T[], start: number, len: number) {\n        if (start < 0) {\n            return;\n        }\n        for (let i = 0; i < len; ++i) {\n            arr.removeAt(start)\n        }\n    }\n\n    export function arrayReverse<T>(arr: T[]): void {\n        let len = arr.length;\n        for (let i = 0; i < len / 2; i++) {\n            swap(arr, i, len - i - 1);\n        }\n    }\n\n    export function arrayShift<T>(arr: T[]): T {\n        return arr.removeAt(0);\n    }\n\n    export function arrayJoin<T>(arr: T[], sep?: string): string {\n        if (sep === undefined || sep === null) {\n            sep = \",\";\n        }\n\n        let r = \"\";\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            if (i > 0 && sep)\n                r += sep;\n            r += (arr[i] === undefined || arr[i] === null) ? \"\" : arr[i];\n        }\n        return r;\n    }\n\n    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.\n        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {\n            for(let i = values.length; i > 0; --i) {\n                arr.insertAt(0, values[i - 1]);\n            }\n            return arr.length;\n        }\n    */\n    export function arrayUnshift<T>(arr: T[], value: T): number {\n        arr.insertAt(0, value);\n        return arr.length;\n    }\n\n    function swap<T>(arr: T[], i: number, j: number): void {\n        let temp: T = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n\n    function sortHelper<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (arr.length <= 0 || !callbackfn) {\n            return arr;\n        }\n        let len = arr.length;\n        // simple selection sort.\n        for (let i = 0; i < len - 1; ++i) {\n            for (let j = i + 1; j < len; ++j) {\n                if (callbackfn(arr[i], arr[j]) > 0) {\n                    swap(arr, i, j);\n                }\n            }\n        }\n        return arr;\n    }\n\n    export function arraySort<T>(arr: T[], callbackfn?: (value1: T, value2: T) => number): T[] {\n        if (!callbackfn && arr.length > 1) {\n            callbackfn = (a, b) => {\n                // default is sort as if the element were a string, with null < undefined\n                const aIsUndef = a === undefined;\n                const bIsUndef = b === undefined;\n                if (aIsUndef && bIsUndef) return 0;\n                else if (aIsUndef) return 1;\n                else if (bIsUndef) return -1;\n\n                const aIsNull = a === null;\n                const bIsNull = b === null;\n                if (aIsNull && bIsNull) return 0;\n                else if (aIsNull) return 1;\n                else if (bIsNull) return -1;\n\n                return (a + \"\").compare(b + \"\");\n            }\n        }\n        return sortHelper(arr, callbackfn);\n    }\n\n    export function arrayMap<T, U>(arr: T[], callbackfn: (value: T, index: number) => U): U[] {\n        let res: U[] = []\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            res.push(callbackfn(arr[i], i))\n        }\n        return res\n    }\n\n    export function arraySome<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (callbackfn(arr[i], i))\n                return true;\n        return false;\n    }\n\n    export function arrayEvery<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): boolean {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i)\n            if (!callbackfn(arr[i], i))\n                return false;\n        return true;\n    }\n\n    export function arrayForEach<T>(arr: T[], callbackfn: (value: T, index: number) => void): void {\n        let len = arr.length // caching this seems to match V8\n        for (let i = 0; i < len; ++i) {\n            callbackfn(arr[i], i);\n        }\n    }\n\n    export function arrayFilter<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T[] {\n        let res: T[] = []\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) res.push(v)\n        }\n        return res\n    }\n\n    export function arrayFind<T>(arr: T[], callbackfn: (value: T, index: number) => boolean): T {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            let v = arr[i] // need to cache\n            if (callbackfn(v, i)) return v;\n        }\n        return undefined;\n    }\n\n    export function arrayReduce<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number) => U, initialValue: U): U {\n        let len = arr.length\n        for (let i = 0; i < len; ++i) {\n            initialValue = callbackfn(initialValue, arr[i], i)\n        }\n        return initialValue\n    }\n\n    export function arrayConcat<T>(arr: T[], otherArr: T[]): T[] {\n        let out: T[] = [];\n        for (let value of arr) {\n            out.push(value);\n        }\n        for (let value of otherArr) {\n            out.push(value);\n        }\n        return out;\n    }\n\n    export function arraySlice<T>(arr: T[], start?: number, end?: number): T[] {\n        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice\n        const res: T[] = [];\n        const len = arr.length;\n\n        if (start === undefined)\n            start = 0;\n        else if (start < 0)\n            start = Math.max(len + start, 0);\n\n        if (start > len)\n            return res;\n\n        if (end === undefined)\n            end = len;\n        else if (end < 0)\n            end = len + end;\n\n        if (end > len)\n            end = len;\n\n        for (let i = start; i < end; ++i) {\n            res.push(arr[i]);\n        }\n        return res;\n    }\n\n    export function stringReplace(s: string, toReplace: string, replacer: string | ((sub: string) => string)) {\n        toReplace = toReplace + \"\";\n        const ind = s.indexOf(toReplace);\n        if (ind == -1)\n            return s;\n\n        const begin = s.slice(0, ind);\n        const end = s.slice(ind + toReplace.length);\n\n        if (typeof replacer == \"string\" || !replacer) {\n            return begin + replacer + end;\n        } else {\n            return begin + replacer(toReplace) + end;\n        }\n    }\n\n    export function stringReplaceAll(s: string, toReplace: string, replacer: string | ((sub: string) => string)) {\n        toReplace = toReplace + \"\";\n        const split = s.split(toReplace);\n        const empty = toReplace.isEmpty();\n\n        let output = (empty ? applyReplace(toReplace, replacer) : \"\");\n\n        if (split.length) {\n            output += split[0];\n        }\n\n        for (let i = 1; i < split.length; ++i) {\n            output += applyReplace(toReplace, replacer) + split[i];\n        }\n\n        if (!s.isEmpty() && empty) {\n            output += applyReplace(toReplace, replacer);\n        }\n\n        return output;\n\n        function applyReplace(r: string, replacer: string | ((sub: string) => string)): string {\n            if (typeof replacer == \"string\" || !replacer) {\n                return replacer as string;\n            } else {\n                return replacer(r);\n            }\n        }\n    }\n\n\n    export function stringSlice(s: string, start: number, end?: number): string {\n        const len = s.length;\n\n        if (start < 0) {\n            start = Math.max(len + start, 0);\n        }\n\n        if (end == null) {\n            end = len;\n        }\n\n        if (end < 0) {\n            end = len + end;\n        }\n\n        return s.substr(start, end - start);\n    }\n\n    // TODO move to PXT\n    // also note this doesn't handle unicode, but neither does JS (there's toLocaleLowerCase())\n    export function stringToLowerCase(s: string): string {\n        let r = \"\"\n        let prev = 0\n        for (let i = 0; i < s.length; i++) {\n            const c = s.charCodeAt(i)\n            if (65 <= c && c <= 90) {\n                r += s.slice(prev, i) + String.fromCharCode(c + 32)\n                prev = i + 1\n            }\n        }\n        r += s.slice(prev)\n        return r\n    }\n\n    export function stringSplit(S: string, separator?: string, limit?: number): string[] {\n        // https://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.split\n        const A: string[] = [];\n        let lim = 0;\n        if (limit === undefined)\n            lim = (1 << 29) - 1; // spec says 1 << 53, leaving it at 29 for constant folding\n        else if (limit < 0)\n            lim = 0;\n        else\n            lim = limit | 0;\n        const s = S.length;\n        let p = 0;\n        const R = separator;\n        if (lim == 0)\n            return A;\n        if (separator === undefined) {\n            A[0] = S;\n            return A;\n        }\n        if (s == 0) {\n            let z = splitMatch(S, 0, R);\n            if (z > -1) return A;\n            A[0] = S;\n            return A;\n        }\n        let T: string;\n        let q = p;\n        while (q != s) {\n            let e = splitMatch(S, q, R);\n            if (e < 0) q++;\n            else {\n                if (e == p) q++;\n                else {\n                    T = stringSlice(S, p, q);\n                    A.push(T);\n                    if (A.length == lim) return A;\n                    p = e;\n                    q = p;\n                }\n            }\n        }\n        T = stringSlice(S, p, q);\n        A.push(T);\n        return A;\n    }\n\n    function splitMatch(S: string, q: number, R: string): number {\n        const r = R.length;\n        const s = S.length;\n        if (q + r > s) return -1;\n        for (let i = 0; i < r; ++i) {\n            if (S[q + i] != R[i])\n                return -1;\n        }\n        return q + r;\n    }\n\n    export function stringTrim(s: string): string {\n        let start = 0;\n        let end = s.length - 1;\n\n        while (start <= end && isWhitespace(s.charCodeAt(start)))\n            ++start;\n\n        while (end > start && isWhitespace(s.charCodeAt(end)))\n            --end;\n        return s.slice(start, end + 1);\n    }\n\n    export function isWhitespace(c: number): boolean {\n        // https://www.ecma-international.org/ecma-262/6.0/#sec-white-space\n        switch (c) {\n            case 0x0009:  // character tab\n            case 0x000B:  // line tab\n            case 0x000C:  // form feed\n            case 0x0020:  // space\n            case 0x00A0:  // no-break space\n            case 0xFEFF:  // zero width no break space\n            case 0x000A:  // line feed\n            case 0x000D:  // carriage return\n            case 0x2028:  // line separator\n            case 0x2029:  // paragraph separator\n                return true;\n            default:\n                return false;\n        }\n    }\n\n    export function stringEmpty(S: string): boolean {\n        return !S;\n    }\n}\n\nnamespace Math {\n    export function clamp(min: number, max: number, value: number): number {\n        return Math.min(max, Math.max(min, value));\n    }\n\n    /**\n      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).\n      * For example, the absolute value of -5 is the same as the absolute value of 5.\n      * @param x A numeric expression for which the absolute value is needed.\n      */\n    //% help=math/abs\n    export function abs(x: number): number {\n        return x < 0 ? -x : x;\n    }\n\n    /**\n      * Returns the sign of the x, indicating whether x is positive, negative or zero.\n      * @param x The numeric expression to test\n      */\n    export function sign(x: number): number {\n        if (x == 0) return 0;\n        if (x > 0) return 1;\n        return -1;\n    }\n\n    /**\n      * Returns the larger of two supplied numeric expressions.\n      */\n    //% help=math/max\n    export function max(a: number, b: number): number {\n        if (a >= b) return a;\n        return b;\n    }\n\n    /**\n      * Returns the smaller of two supplied numeric expressions.\n      */\n    //% help=math/min\n    export function min(a: number, b: number): number {\n        if (a <= b) return a;\n        return b;\n    }\n\n    /**\n     * Rounds ``x`` to a number with the given number of ``digits``\n     * @param x the number to round\n     * @param digits the number of resulting digits\n     */\n    //%\n    export function roundWithPrecision(x: number, digits: number): number {\n        digits = digits | 0;\n        // invalid digits input\n        if (digits <= 0) return Math.round(x);\n        if (x == 0) return 0;\n        let r = 0;\n        do {\n            const d = Math.pow(10, digits);\n            r = Math.round(x * d) / d;\n            digits++;\n        } while (r == 0 && digits < 21);\n        return r;\n    }\n}\n\n\n//% blockHidden=1\nnamespace __internal {\n    /**\n     * A shim to render a boolean as a down/up toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleDownUp block=\"%down\"\n    //% down.fieldEditor=toggledownup\n    //% down.fieldOptions.decompileLiterals=true\n    export function __downUp(down: boolean): boolean {\n        return down;\n    }\n\n    /**\n     * A shim to render a boolean as a up/down toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleUpDown block=\"%up\"\n    //% up.fieldEditor=toggleupdown\n    //% up.fieldOptions.decompileLiterals=true\n    export function __upDown(up: boolean): boolean {\n        return up;\n    }\n\n    /**\n     * A shim to render a boolean as a high/low toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleHighLow block=\"%high\"\n    //% high.fieldEditor=togglehighlow\n    //% high.fieldOptions.decompileLiterals=true\n    export function __highLow(high: boolean): boolean {\n        return high;\n    }\n\n    /**\n     * A shim to render a boolean as a on/off toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleOnOff block=\"%on\"\n    //% on.fieldEditor=toggleonoff\n    //% on.fieldOptions.decompileLiterals=true\n    export function __onOff(on: boolean): boolean {\n        return on;\n    }\n\n    /**\n     * A shim to render a boolean as a yes/no toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleYesNo block=\"%yes\"\n    //% yes.fieldEditor=toggleyesno\n    //% yes.fieldOptions.decompileLiterals=true\n    export function __yesNo(yes: boolean): boolean {\n        return yes;\n    }\n\n    /**\n     * A shim to render a boolean as a win/lose toggle\n     */\n    //% shim=TD_ID blockHidden=1\n    //% blockId=toggleWinLose block=\"%win\"\n    //% win.fieldEditor=togglewinlose\n    //% win.fieldOptions.decompileLiterals=true\n    export function __winLose(win: boolean): boolean {\n        return win;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param color color, eg: #ff0000\n     */\n    //% blockId=colorNumberPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colornumber\" value.fieldOptions.decompileLiterals=true\n    //% value.defl='#ff0000'\n    //% value.fieldOptions.colours='[\"#ff0000\",\"#ff8000\",\"#ffff00\",\"#ff9da5\",\"#00ff00\",\"#b09eff\",\"#00ffff\",\"#007fff\",\"#65471f\",\"#0000ff\",\"#7f00ff\",\"#ff0080\",\"#ff00ff\",\"#ffffff\",\"#999999\",\"#000000\"]'\n    //% value.fieldOptions.columns=4 value.fieldOptions.className='rgbColorPicker'\n    export function __colorNumberPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * Get the color wheel field editor\n     * @param value value between 0 to 255 to get a color value, eg: 10\n     */\n    //% blockId=colorWheelPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    export function __colorWheelPicker(value: number) {\n        return value;\n    }\n\n    /**\n    * Get the color wheel field editor using HSV values\n    * @param value value between 0 to 255 to get a color value, eg: 10\n    */\n    //% blockId=colorWheelHsvPicker block=\"%value\"\n    //% blockHidden=true\n    //% shim=TD_ID colorSecondary=\"#FFFFFF\"\n    //% value.fieldEditor=\"colorwheel\" value.fieldOptions.decompileLiterals=true\n    //% value.fieldOptions.sliderWidth='200'\n    //% value.fieldOptions.min=0 value.fieldOptions.max=255\n    //% value.fieldOptions.channel=hsvfast\n    export function __colorWheelHsvPicker(value: number) {\n        return value;\n    }\n\n    /**\n     * A speed picker\n     * @param speed the speed, eg: 50\n     */\n    //% blockId=speedPicker block=\"%speed\" shim=TD_ID\n    //% speed.fieldEditor=\"speed\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 speed.fieldOptions.decompileLiterals=1\n    export function __speedPicker(speed: number): number {\n        return speed;\n    }\n\n    /**\n     * A turn ratio picker\n     * @param turnratio the turn ratio, eg: 0\n     */\n    //% blockId=turnRatioPicker block=\"%turnratio\" shim=TD_ID\n    //% turnratio.fieldEditor=\"turnratio\" colorSecondary=\"#FFFFFF\"\n    //% weight=0 blockHidden=1 turnRatio.fieldOptions.decompileLiterals=1\n    export function __turnRatioPicker(turnratio: number): number {\n        return turnratio;\n    }\n\n    /**\n     * A field editor that displays a protractor\n     */\n    //% blockId=protractorPicker block=\"%angle\"\n    //% shim=TD_ID\n    //% angle.fieldEditor=protractor\n    //% angle.fieldOptions.decompileLiterals=1\n    //% colorSecondary=\"#FFFFFF\"\n    //% blockHidden=1\n    export function __protractor(angle: number) {\n        return angle;\n    }\n\n    /**\n      * Get the time field editor\n      * @param ms time duration in milliseconds, eg: 500, 1000\n      */\n    //% blockId=timePicker block=\"%ms\"\n    //% blockHidden=true shim=TD_ID\n    //% colorSecondary=\"#FFFFFF\"\n    //% ms.fieldEditor=\"numberdropdown\" ms.fieldOptions.decompileLiterals=true\n    //% ms.fieldOptions.data='[[\"100 ms\", 100], [\"200 ms\", 200], [\"500 ms\", 500], [\"1 second\", 1000], [\"2 seconds\", 2000], [\"5 seconds\", 5000]]'\n    export function __timePicker(ms: number): number {\n        return ms;\n    }\n}",
            "pxt.json": "{\n    \"name\": \"core\",\n    \"description\": \"A target sample for PXT\",\n    \"dependencies\": {},\n    \"files\": [\n        \"README.md\",\n        \"pxt-core.d.ts\",\n        \"pxt-helpers.ts\",\n        \"enums.d.ts\",\n        \"sims.d.ts\",\n        \"ns.ts\"\n    ],\n    \"testFiles\": [\n        \"test.ts\"\n    ],\n    \"public\": true,\n    \"targetVersions\": {\n        \"target\": \"2.0.2\"\n    }\n}\n",
            "sims.d.ts": "// Auto-generated from simulator. Do not edit.\ndeclare namespace hare {\n    /**\n     * This is hop\n     */\n    //% blockId=\"sampleHop\" block=\"hop %hop on color %color=colorNumberPicker\"\n    //% hop.fieldEditor=\"gridpicker\"\n    //% shim=hare::hop\n    function hop(hop: Hop, color: number): void;\n\n    //% blockId=sampleOnLand block=\"on land\"\n    //% optionalVariableArgs\n    //% shim=hare::onLand\n    function onLand(handler: (height: number, more: number, most: number) => void): void;\n\n}\ndeclare namespace turtle {\n    /**\n     * Moves the sprite forward\n     * @param steps number of steps to move, eg: 1\n     */\n    //% weight=90\n    //% blockId=sampleForward block=\"forward %steps\"\n    //% shim=turtle::forwardAsync promise\n    function forward(steps: number): void;\n\n    /**\n     * Moves the sprite forward\n     * @param direction the direction to turn, eg: Direction.Left\n     * @param angle degrees to turn, eg:90\n     */\n    //% weight=85\n    //% blockId=sampleTurn block=\"turn %direction|by %angle degrees\"\n    //% angle.min=-180 angle.max=180\n    //% shim=turtle::turnAsync promise\n    function turn(direction: Direction, angle: number): void;\n\n    /**\n     * Triggers when the turtle bumps a wall\n     * @param handler \n     */\n    //% blockId=onBump block=\"on bump\"\n    //% shim=turtle::onBump\n    function onBump(handler: () => void): void;\n\n}\ndeclare namespace loops {\n    /**\n     * Repeats the code forever in the background. On each iteration, allows other code to run.\n     * @param body the code to repeat\n     */\n    //% help=functions/forever weight=55 blockGap=8\n    //% blockId=device_forever block=\"forever\"\n    //% shim=loops::forever\n    function forever(body: () => void): void;\n\n    /**\n     * Pause for the specified time in milliseconds\n     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000\n     */\n    //% help=functions/pause weight=54\n    //% block=\"pause (ms) %pause\" blockId=device_pause\n    //% shim=loops::pauseAsync promise\n    function pause(ms: number): void;\n\n}\ndeclare namespace console {\n    /**\n     * Print out message\n     */\n    //%\n    //% shim=console::log\n    function log(msg: string): void;\n\n}\n    /**\n     * A ghost on the screen.\n     */\n    //%\n    declare class Sprite {\n        /**\n         * The X-coordiante\n         */\n        //%\n        //% shim=.x\n        public x: number;\n\n        /**\n         * The Y-coordiante\n         */\n        //%\n        //% shim=.y\n        public y: number;\n\n        /**\n         * Move the thing forward\n         */\n        //%\n        //% shim=.forwardAsync promise\n        public forward(steps: number): void;\n\n    }\ndeclare namespace sprites {\n    /**\n     * Creates a new sprite\n     */\n    //% blockId=\"sampleCreate\" block=\"createSprite\"\n    //% shim=sprites::createSprite\n    function createSprite(): Sprite;\n\n}\n\n// Auto-generated. Do not edit. Really.\n",
            "test.ts": ""
        }
    },
    "compile": {
        "isNative": false,
        "hasHex": false,
        "switches": {},
        "jsRefCounting": false,
        "noSourceInFlash": true,
        "utf8": true
    },
    "apiInfo": {
        "libs/core": {
            "apis": {
                "byQName": {
                    "Array": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "blockNamespace": "Arrays",
                            "jsDoc": "Add, remove, and replace items in lists."
                        }
                    },
                    "Array.length": {
                        "kind": 2,
                        "retType": "number",
                        "attributes": {
                            "weight": 84,
                            "blockId": "lists_length",
                            "block": "length of %VALUE",
                            "blockBuiltin": "true",
                            "blockNamespace": "arrays",
                            "jsDoc": "Get or set the length of an array. This number is one more than the index of the last element the array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "length of ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "VALUE",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "VALUE",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "isInstance": true
                    },
                    "Array.push": {
                        "kind": -1,
                        "attributes": {
                            "help": "arrays/push",
                            "weight": 50,
                            "blockId": "array_push",
                            "block": "%list| add value %value| to end",
                            "blockNamespace": "arrays",
                            "group": "Modify",
                            "paramHelp": {
                                "items": "New elements of the Array."
                            },
                            "jsDoc": "Append a new element to an array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " add value ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " to end",
                                        "style": []
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "item",
                                "type": "T"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array.append"
                    },
                    "Array.concat": {
                        "kind": -1,
                        "retType": "T[]",
                        "attributes": {
                            "helper": "arrayConcat",
                            "weight": 40,
                            "paramHelp": {
                                "arr": "The other array that is being concatenated with"
                            },
                            "jsDoc": "Concatenates the values with another array."
                        },
                        "parameters": [
                            {
                                "name": "arr",
                                "description": "The other array that is being concatenated with",
                                "type": "T[]"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.pop": {
                        "kind": -1,
                        "retType": "T",
                        "attributes": {
                            "help": "arrays/pop",
                            "weight": 45,
                            "blockId": "array_pop",
                            "block": "get and remove last value from %list",
                            "blockNamespace": "arrays",
                            "group": "Read",
                            "jsDoc": "Remove the last element from an array and return it.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "get and remove last value from ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [],
                        "isInstance": true
                    },
                    "Array.reverse": {
                        "kind": -1,
                        "attributes": {
                            "help": "arrays/reverse",
                            "helper": "arrayReverse",
                            "weight": 10,
                            "blockId": "array_reverse",
                            "block": "reverse %list",
                            "blockNamespace": "arrays",
                            "group": "Operations",
                            "jsDoc": "Reverse the elements in an array. The first array element becomes the last, and the last array element becomes the first.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "reverse ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [],
                        "isInstance": true
                    },
                    "Array.shift": {
                        "kind": -1,
                        "retType": "T",
                        "attributes": {
                            "help": "arrays/shift",
                            "helper": "arrayShift",
                            "weight": 30,
                            "blockId": "array_shift",
                            "block": "get and remove first value from %list",
                            "blockNamespace": "arrays",
                            "group": "Read",
                            "jsDoc": "Remove the first element from an array and return it. This method changes the length of the array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "get and remove first value from ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [],
                        "isInstance": true
                    },
                    "Array.unshift": {
                        "kind": -1,
                        "retType": "number",
                        "attributes": {
                            "help": "arrays/unshift",
                            "helper": "arrayUnshift",
                            "weight": 25,
                            "blockId": "array_unshift",
                            "block": "%list| insert %value| at beginning",
                            "blockNamespace": "arrays",
                            "group": "Modify",
                            "paramHelp": {
                                "element": "to insert at the start of the Array."
                            },
                            "jsDoc": "Add one element to the beginning of an array and return the new length of the array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " insert ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " at beginning",
                                        "style": []
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "value",
                                "type": "T"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.slice": {
                        "kind": -1,
                        "retType": "T[]",
                        "attributes": {
                            "paramDefl": {
                                "start": "0",
                                "end": "0"
                            },
                            "help": "arrays/slice",
                            "helper": "arraySlice",
                            "weight": 41,
                            "blockNamespace": "arrays",
                            "paramHelp": {
                                "start": "The beginning of the specified portion of the array. eg: 0",
                                "end": "The end of the specified portion of the array. eg: 0"
                            },
                            "jsDoc": "Return a section of an array."
                        },
                        "parameters": [
                            {
                                "name": "start",
                                "description": "The beginning of the specified portion of the array. eg: 0",
                                "initializer": "undefined",
                                "default": "0"
                            },
                            {
                                "name": "end",
                                "description": "The end of the specified portion of the array. eg: 0",
                                "initializer": "undefined",
                                "default": "0"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.splice": {
                        "kind": -1,
                        "attributes": {
                            "paramDefl": {
                                "start": "0",
                                "deleteCount": "0"
                            },
                            "helper": "arraySplice",
                            "weight": 40,
                            "paramHelp": {
                                "start": "The zero-based location in the array from which to start removing elements. eg: 0",
                                "deleteCount": "The number of elements to remove. eg: 0"
                            },
                            "jsDoc": "Remove elements from an array."
                        },
                        "parameters": [
                            {
                                "name": "start",
                                "description": "The zero-based location in the array from which to start removing elements. eg: 0",
                                "default": "0"
                            },
                            {
                                "name": "deleteCount",
                                "description": "The number of elements to remove. eg: 0",
                                "default": "0"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.join": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "helper": "arrayJoin",
                            "weight": 40,
                            "paramHelp": {
                                "sep": "the string separator"
                            },
                            "jsDoc": "joins all elements of an array into a string and returns this string."
                        },
                        "parameters": [
                            {
                                "name": "sep",
                                "description": "the string separator",
                                "type": "string",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.some": {
                        "kind": -1,
                        "retType": "boolean",
                        "attributes": {
                            "helper": "arraySome",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": "A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array."
                            },
                            "jsDoc": "Tests whether at least one element in the array passes the test implemented by the provided function."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "description": "A function that accepts up to two arguments. The some method calls the callbackfn function one time for each element in the array.",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.every": {
                        "kind": -1,
                        "retType": "boolean",
                        "attributes": {
                            "helper": "arrayEvery",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": "A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array."
                            },
                            "jsDoc": "Tests whether all elements in the array pass the test implemented by the provided function."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "description": "A function that accepts up to two arguments. The every method calls the callbackfn function one time for each element in the array.",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.sort": {
                        "kind": -1,
                        "retType": "T[]",
                        "attributes": {
                            "helper": "arraySort",
                            "weight": 40,
                            "paramHelp": {
                                "specifies": "a function that defines the sort order. If omitted, the array is sorted according to the prmitive type"
                            },
                            "jsDoc": "Sort the elements of an array in place and returns the array. The sort is not necessarily stable."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "type": "(value1: T, value2: T) => number",
                                "initializer": "undefined",
                                "handlerParameters": [
                                    {
                                        "name": "value1",
                                        "type": "T"
                                    },
                                    {
                                        "name": "value2",
                                        "type": "T"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.map": {
                        "kind": -1,
                        "retType": "U[]",
                        "attributes": {
                            "helper": "arrayMap",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": "A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array."
                            },
                            "jsDoc": "Call a defined callback function on each element of an array, and return an array containing the results."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "description": "A function that accepts up to two arguments. The map method calls the callbackfn function one time for each element in the array.",
                                "type": "(value: T, index: number) => U",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.forEach": {
                        "kind": -1,
                        "attributes": {
                            "helper": "arrayForEach",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": "A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array."
                            },
                            "jsDoc": "Call a defined callback function on each element of an array."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "description": "A function that accepts up to two arguments. The forEach method calls the callbackfn function one time for each element in the array.",
                                "type": "(value: T, index: number) => void",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array.for_each"
                    },
                    "Array.filter": {
                        "kind": -1,
                        "retType": "T[]",
                        "attributes": {
                            "helper": "arrayFilter",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": "A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array."
                            },
                            "jsDoc": "Return the elements of an array that meet the condition specified in a callback function."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "description": "A function that accepts up to two arguments. The filter method calls the callbackfn function one time for each element in the array.",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.fill": {
                        "kind": -1,
                        "retType": "T[]",
                        "attributes": {
                            "helper": "arrayFill",
                            "weight": 39,
                            "jsDoc": "Fills all the elements of an array from a start index to an end index with a static value. The end index is not included."
                        },
                        "parameters": [
                            {
                                "name": "value",
                                "type": "T"
                            },
                            {
                                "name": "start",
                                "initializer": "undefined"
                            },
                            {
                                "name": "end",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.find": {
                        "kind": -1,
                        "retType": "T",
                        "attributes": {
                            "helper": "arrayFind",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": ""
                            },
                            "jsDoc": "Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.reduce": {
                        "kind": -1,
                        "retType": "U",
                        "attributes": {
                            "helper": "arrayReduce",
                            "weight": 40,
                            "paramHelp": {
                                "callbackfn": "A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.",
                                "initialValue": "Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value."
                            },
                            "jsDoc": "Call the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function."
                        },
                        "parameters": [
                            {
                                "name": "callbackfn",
                                "description": "A function that accepts up to three arguments. The reduce method calls the callbackfn function one time for each element in the array.",
                                "type": "(previousValue: U, currentValue: T, currentIndex: number) => U",
                                "handlerParameters": [
                                    {
                                        "name": "previousValue",
                                        "type": "U"
                                    },
                                    {
                                        "name": "currentValue",
                                        "type": "T"
                                    },
                                    {
                                        "name": "currentIndex",
                                        "type": "number"
                                    }
                                ]
                            },
                            {
                                "name": "initialValue",
                                "description": "Initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.",
                                "type": "U"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.removeElement": {
                        "kind": -1,
                        "retType": "boolean",
                        "attributes": {
                            "weight": 48,
                            "jsDoc": "Remove the first occurence of an object. Returns true if removed."
                        },
                        "parameters": [
                            {
                                "name": "element",
                                "type": "T"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array.remove_element"
                    },
                    "Array.removeAt": {
                        "kind": -1,
                        "retType": "T",
                        "attributes": {
                            "help": "arrays/remove-at",
                            "weight": 47,
                            "blockId": "array_removeat",
                            "block": "%list| get and remove value at %index",
                            "blockNamespace": "arrays",
                            "group": "Read",
                            "jsDoc": "Remove the element at a certain index.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " get and remove value at ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "index",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "index",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "index"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array.remove_at"
                    },
                    "Array.insertAt": {
                        "kind": -1,
                        "attributes": {
                            "paramDefl": {
                                "index": "0",
                                "the": "0"
                            },
                            "help": "arrays/insert-at",
                            "weight": 20,
                            "blockId": "array_insertAt",
                            "block": "%list| insert at %index| value %value",
                            "blockNamespace": "arrays",
                            "group": "Modify",
                            "paramHelp": {
                                "index": "the zero-based position in the list to insert the value, eg: 0",
                                "the": "value to insert, eg: 0"
                            },
                            "jsDoc": "Insert the value at a particular index, increases length by 1",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " insert at ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "index",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " value ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "index",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "index",
                                "description": "the zero-based position in the list to insert the value, eg: 0",
                                "default": "0"
                            },
                            {
                                "name": "value",
                                "type": "T"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array.insert_at"
                    },
                    "Array.indexOf": {
                        "kind": -1,
                        "retType": "number",
                        "attributes": {
                            "help": "arrays/index-of",
                            "weight": 40,
                            "blockId": "array_indexof",
                            "block": "%list| find index of %value",
                            "blockNamespace": "arrays",
                            "group": "Operations",
                            "paramHelp": {
                                "item": "The value to locate in the array.",
                                "fromIndex": "The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0."
                            },
                            "jsDoc": "Return the index of the first occurrence of a value in an array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " find index of ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "item",
                                "description": "The value to locate in the array.",
                                "type": "T"
                            },
                            {
                                "name": "fromIndex",
                                "description": "The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array.index"
                    },
                    "Array.get": {
                        "kind": -1,
                        "retType": "T",
                        "attributes": {
                            "paramDefl": {
                                "index": "0"
                            },
                            "help": "arrays/get",
                            "weight": 85,
                            "paramHelp": {
                                "index": "the zero-based position in the list of the item, eg: 0"
                            },
                            "jsDoc": "Get the value at a particular index"
                        },
                        "parameters": [
                            {
                                "name": "index",
                                "description": "the zero-based position in the list of the item, eg: 0",
                                "default": "0"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array.set": {
                        "kind": -1,
                        "attributes": {
                            "paramDefl": {
                                "index": "0",
                                "the": "0"
                            },
                            "help": "arrays/set",
                            "weight": 84,
                            "paramHelp": {
                                "index": "the zero-based position in the list to store the value, eg: 0",
                                "the": "value to insert, eg: 0"
                            },
                            "jsDoc": "Store a value at a particular index"
                        },
                        "parameters": [
                            {
                                "name": "index",
                                "description": "the zero-based position in the list to store the value, eg: 0",
                                "default": "0"
                            },
                            {
                                "name": "value",
                                "type": "T"
                            }
                        ],
                        "isInstance": true
                    },
                    "Array._unshiftStatement": {
                        "kind": -1,
                        "attributes": {
                            "help": "arrays/unshift",
                            "helper": "arrayUnshift",
                            "weight": 24,
                            "blockId": "array_unshift_statement",
                            "block": "%list| insert %value| at beginning",
                            "blockNamespace": "arrays",
                            "blockAliasFor": "Array.unshift",
                            "group": "Modify",
                            "paramHelp": {
                                "element": "to insert at the start of the Array."
                            },
                            "jsDoc": "Add one element to the beginning of an array and return the new length of the array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " insert ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " at beginning",
                                        "style": []
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "value",
                                "type": "T"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array._unshift_statement"
                    },
                    "Array._popStatement": {
                        "kind": -1,
                        "attributes": {
                            "help": "arrays/pop",
                            "weight": 44,
                            "blockId": "array_pop_statement",
                            "block": "remove last value from %list",
                            "blockNamespace": "arrays",
                            "blockAliasFor": "Array.pop",
                            "group": "Modify",
                            "jsDoc": "Remove the last element from an array and return it.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "remove last value from ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [],
                        "isInstance": true,
                        "pyQName": "Array._pop_statement"
                    },
                    "Array._shiftStatement": {
                        "kind": -1,
                        "attributes": {
                            "help": "arrays/shift",
                            "helper": "arrayShift",
                            "weight": 29,
                            "blockId": "array_shift_statement",
                            "block": "remove first value from %list",
                            "blockNamespace": "arrays",
                            "blockAliasFor": "Array.shift",
                            "group": "Modify",
                            "jsDoc": "Remove the first element from an array and return it. This method changes the length of the array.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "remove first value from ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [],
                        "isInstance": true,
                        "pyQName": "Array._shift_statement"
                    },
                    "Array._removeAtStatement": {
                        "kind": -1,
                        "attributes": {
                            "help": "arrays/remove-at",
                            "weight": 14,
                            "blockId": "array_removeat_statement",
                            "block": "%list| remove value at %index",
                            "blockNamespace": "arrays",
                            "blockAliasFor": "Array.removeAt",
                            "group": "Modify",
                            "jsDoc": "Remove the element at a certain index.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " remove value at ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "index",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "list",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "index",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "index"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "Array._remove_at_statement"
                    },
                    "String": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "blockNamespace": "text",
                            "jsDoc": "Combine, split, and search text strings."
                        }
                    },
                    "String.concat": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "weight": 49,
                            "blockId": "string_concat",
                            "blockNamespace": "text",
                            "paramHelp": {
                                "other": "The string to append to the end of the string."
                            },
                            "jsDoc": "Returns a string that contains the concatenation of two or more strings."
                        },
                        "parameters": [
                            {
                                "name": "other",
                                "description": "The string to append to the end of the string.",
                                "type": "string"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.charAt": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "weight": 48,
                            "help": "text/char-at",
                            "blockId": "string_get",
                            "block": "char from %this=text|at %pos",
                            "blockNamespace": "text",
                            "paramHelp": {
                                "index": "The zero-based index of the desired character."
                            },
                            "jsDoc": "Return the character at the specified index.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "char from ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "at ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "pos",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "pos",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "index",
                                "description": "The zero-based index of the desired character."
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "String.char_at"
                    },
                    "String.length": {
                        "kind": 2,
                        "retType": "number",
                        "attributes": {
                            "property": "true",
                            "weight": 47,
                            "blockId": "text_length",
                            "block": "length of %VALUE",
                            "blockBuiltin": "true",
                            "blockNamespace": "text",
                            "jsDoc": "Returns the length of a String object.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "length of ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "VALUE",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "VALUE",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "isInstance": true
                    },
                    "String.charCodeAt": {
                        "kind": -1,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "index": "The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                            },
                            "jsDoc": "Return the Unicode value of the character at the specified location."
                        },
                        "parameters": [
                            {
                                "name": "index",
                                "description": "The zero-based index of the desired character. If there is no character at the specified index, NaN is returned."
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "String.char_code_at"
                    },
                    "String.compare": {
                        "kind": -1,
                        "retType": "number",
                        "attributes": {
                            "help": "text/compare",
                            "blockId": "string_compare",
                            "block": "compare %this=text| to %that",
                            "blockNamespace": "text",
                            "paramHelp": {
                                "that": "String to compare to target string"
                            },
                            "jsDoc": "See how the order of characters in two strings is different (in ASCII encoding).",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "compare ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " to ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "that",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "that",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "that",
                                "description": "String to compare to target string",
                                "type": "string"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.substr": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "paramDefl": {
                                "length": "10",
                                "start": "0"
                            },
                            "explicitDefaults": [
                                "length"
                            ],
                            "help": "text/substr",
                            "blockId": "string_substr",
                            "block": "substring of %this=text|from %start|of length %length",
                            "blockNamespace": "text",
                            "paramHelp": {
                                "start": "first character index; can be negative from counting from the end, eg:0",
                                "length": "number of characters to extract"
                            },
                            "jsDoc": "Return a substring of the current string.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "substring of ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "from ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "start",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "of length ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "length",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "start",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "length",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "start",
                                "description": "first character index; can be negative from counting from the end, eg:0",
                                "default": "0"
                            },
                            {
                                "name": "length",
                                "description": "number of characters to extract",
                                "initializer": "10",
                                "default": "10"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.replace": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "helper": "stringReplace",
                            "paramHelp": {
                                "toReplace": "the substring to replace in the current string",
                                "replacer": "either the string that replaces toReplace in the current string,"
                            },
                            "jsDoc": "Return the current string with the first occurence of toReplace\nreplaced with the replacer\n\n\nor a function that accepts the substring and returns the replacement string."
                        },
                        "parameters": [
                            {
                                "name": "toReplace",
                                "description": "the substring to replace in the current string",
                                "type": "string"
                            },
                            {
                                "name": "replacer",
                                "description": "either the string that replaces toReplace in the current string,",
                                "type": "string | ((sub: string) => string)"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.replaceAll": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "helper": "stringReplaceAll",
                            "paramHelp": {
                                "toReplace": "the substring to replace in the current string",
                                "replacer": "either the string that replaces toReplace in the current string,"
                            },
                            "jsDoc": "Return the current string with each occurence of toReplace\nreplaced with the replacer\n\n\nor a function that accepts the substring and returns the replacement string."
                        },
                        "parameters": [
                            {
                                "name": "toReplace",
                                "description": "the substring to replace in the current string",
                                "type": "string"
                            },
                            {
                                "name": "replacer",
                                "description": "either the string that replaces toReplace in the current string,",
                                "type": "string | ((sub: string) => string)"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "String.replace_all"
                    },
                    "String.slice": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "paramDefl": {
                                "start": "0"
                            },
                            "helper": "stringSlice",
                            "paramHelp": {
                                "start": "first character index; can be negative from counting from the end, eg:0",
                                "end": "one-past-last character index"
                            },
                            "jsDoc": "Return a substring of the current string."
                        },
                        "parameters": [
                            {
                                "name": "start",
                                "description": "first character index; can be negative from counting from the end, eg:0",
                                "default": "0"
                            },
                            {
                                "name": "end",
                                "description": "one-past-last character index",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.isEmpty": {
                        "kind": -1,
                        "retType": "boolean",
                        "attributes": {
                            "helper": "stringEmpty",
                            "blockId": "string_isempty",
                            "blockNamespace": "text",
                            "block": "%this=text| is empty",
                            "jsDoc": "Returns a value indicating if the string is empty",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": " is empty",
                                        "style": []
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [],
                        "isInstance": true,
                        "pyQName": "String.is_empty"
                    },
                    "String.indexOf": {
                        "kind": -1,
                        "retType": "number",
                        "attributes": {
                            "help": "text/index-of",
                            "blockId": "string_indexof",
                            "blockNamespace": "text",
                            "block": "%this=text|find index of %searchValue",
                            "paramHelp": {
                                "searchValue": "the text to find",
                                "start": "optional start index for the search"
                            },
                            "jsDoc": "Returns the position of the first occurrence of a specified value in a string.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "find index of ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "searchValue",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "searchValue",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "searchValue",
                                "description": "the text to find",
                                "type": "string"
                            },
                            {
                                "name": "start",
                                "description": "optional start index for the search",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true,
                        "pyQName": "String.index_of"
                    },
                    "String.includes": {
                        "kind": -1,
                        "retType": "boolean",
                        "attributes": {
                            "help": "text/includes",
                            "blockId": "string_includes",
                            "blockNamespace": "text",
                            "block": "%this=text|includes %searchValue",
                            "paramHelp": {
                                "searchValue": "the text to find",
                                "start": "optional start index for the search"
                            },
                            "jsDoc": "Determines whether a string contains the characters of a specified string.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "includes ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "searchValue",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "searchValue",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "searchValue",
                                "description": "the text to find",
                                "type": "string"
                            },
                            {
                                "name": "start",
                                "description": "optional start index for the search",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.split": {
                        "kind": -1,
                        "retType": "string[]",
                        "attributes": {
                            "helper": "stringSplit",
                            "help": "text/split",
                            "blockId": "string_split",
                            "blockNamespace": "text",
                            "block": "split %this=text|at %separator",
                            "paramHelp": {
                                "separator": "@param limit"
                            },
                            "jsDoc": "Splits the string according to the separators",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "split ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "at ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "separator",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "this",
                                        "shadowBlockId": "text",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "separator",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "separator",
                                "description": "@param limit",
                                "type": "string",
                                "initializer": "undefined"
                            },
                            {
                                "name": "limit",
                                "initializer": "undefined"
                            }
                        ],
                        "isInstance": true
                    },
                    "String.trim": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "jsDoc": "Return a substring of the current string with whitespace removed from both ends"
                        },
                        "parameters": [],
                        "isInstance": true
                    },
                    "String.toLowerCase": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "helper": "stringToLowerCase",
                            "help": "text/to-lower-case",
                            "jsDoc": "Converts the string to lower case characters."
                        },
                        "parameters": [],
                        "isInstance": true,
                        "pyQName": "String.to_lower_case"
                    },
                    "parseFloat": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "text": "123",
                                "s": "123"
                            },
                            "help": "text/parse-float",
                            "blockId": "string_parsefloat",
                            "block": "parse to number %text",
                            "blockNamespace": "text",
                            "explicitDefaults": [
                                "text"
                            ],
                            "paramHelp": {
                                "s": "A string to convert into a number. eg: 123"
                            },
                            "jsDoc": "Convert a string to a number.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "parse to number ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "text",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "text",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "text",
                                "type": "string",
                                "initializer": "123",
                                "default": "123"
                            }
                        ],
                        "pyQName": "parse_float"
                    },
                    "randint": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "min": "0",
                                "max": "10"
                            },
                            "blockId": "device_random",
                            "block": "pick random %min|to %limit",
                            "blockNamespace": "Math",
                            "help": "math/randint",
                            "paramHelp": {
                                "min": "the lower inclusive bound, eg: 0",
                                "max": "the upper inclusive bound, eg: 10"
                            },
                            "jsDoc": "Returns a pseudorandom number between min and max included.\nIf both numbers are integral, the result is integral.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "pick random ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "min",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "to ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "limit",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "min",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "limit",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "min",
                                "description": "the lower inclusive bound, eg: 0",
                                "default": "0"
                            },
                            {
                                "name": "max",
                                "description": "the upper inclusive bound, eg: 10",
                                "default": "10"
                            }
                        ]
                    },
                    "Object": {
                        "kind": 5,
                        "retType": ""
                    },
                    "Function": {
                        "kind": 9,
                        "retType": "Function",
                        "extendsTypes": []
                    },
                    "Function.__assignableToFunction": {
                        "kind": 2,
                        "retType": "Function",
                        "isInstance": true
                    },
                    "IArguments": {
                        "kind": 9,
                        "retType": "IArguments",
                        "extendsTypes": []
                    },
                    "IArguments.__assignableToIArguments": {
                        "kind": 2,
                        "retType": "IArguments",
                        "isInstance": true
                    },
                    "RegExp": {
                        "kind": 9,
                        "retType": "RegExp",
                        "extendsTypes": []
                    },
                    "RegExp.__assignableToRegExp": {
                        "kind": 2,
                        "retType": "RegExp",
                        "isInstance": true
                    },
                    "Boolean": {
                        "kind": 9,
                        "retType": "Boolean",
                        "extendsTypes": []
                    },
                    "Boolean.toString": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "jsDoc": "Returns a string representation of an object."
                        },
                        "parameters": [],
                        "isInstance": true,
                        "pyQName": "Boolean.to_string"
                    },
                    "String@type": {
                        "kind": 9,
                        "retType": "String",
                        "attributes": {
                            "blockNamespace": "text",
                            "jsDoc": "Combine, split, and search text strings."
                        },
                        "extendsTypes": [],
                        "pyQName": "String"
                    },
                    "String.fromCharCode": {
                        "kind": -3,
                        "retType": "string",
                        "attributes": {
                            "help": "math/from-char-code",
                            "weight": 1,
                            "blockNamespace": "text",
                            "blockId": "stringFromCharCode",
                            "block": "text from char code %code",
                            "jsDoc": "Make a string from the given ASCII character code.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "text from char code ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "code",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "code",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "code"
                            }
                        ],
                        "pyQName": "String.from_char_code"
                    },
                    "Number": {
                        "kind": 5,
                        "retType": "",
                        "extendsTypes": [
                            "Number"
                        ]
                    },
                    "Number.toString": {
                        "kind": -1,
                        "retType": "string",
                        "attributes": {
                            "jsDoc": "Returns a string representation of a number."
                        },
                        "parameters": [],
                        "isInstance": true,
                        "pyQName": "Number.to_string"
                    },
                    "Array@type": {
                        "kind": 9,
                        "retType": "T[]",
                        "attributes": {
                            "blockNamespace": "Arrays",
                            "jsDoc": "Add, remove, and replace items in lists."
                        },
                        "extendsTypes": [],
                        "pyQName": "Array"
                    },
                    "Array.isArray": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "jsDoc": "Check if a given object is an array."
                        },
                        "parameters": [
                            {
                                "name": "obj",
                                "type": "any"
                            }
                        ],
                        "pyQName": "Array.is_array"
                    },
                    "Object@type": {
                        "kind": 9,
                        "retType": "Object",
                        "extendsTypes": [],
                        "pyQName": "Object"
                    },
                    "Object.keys": {
                        "kind": -3,
                        "retType": "string[]",
                        "attributes": {
                            "jsDoc": "Return the field names in an object."
                        },
                        "parameters": [
                            {
                                "name": "obj",
                                "type": "any"
                            }
                        ]
                    },
                    "Math": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "jsDoc": "More complex operations with numbers."
                        }
                    },
                    "Math.pow": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "The base value of the expression.",
                                "y": "The exponent value of the expression."
                            },
                            "jsDoc": "Returns the value of a base expression taken to a specified power."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "The base value of the expression."
                            },
                            {
                                "name": "y",
                                "description": "The exponent value of the expression."
                            }
                        ]
                    },
                    "Math.random": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math/random",
                            "jsDoc": "Returns a pseudorandom number between 0 and 1."
                        },
                        "parameters": []
                    },
                    "Math.randomRange": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "min": "0",
                                "max": "10"
                            },
                            "blockId": "device_random_deprecated",
                            "block": "pick random %min|to %limit",
                            "help": "math/random-range",
                            "deprecated": "true",
                            "paramHelp": {
                                "min": "the lower inclusive bound, eg: 0",
                                "max": "the upper inclusive bound, eg: 10"
                            },
                            "jsDoc": "Returns a pseudorandom number between min and max included.\nIf both numbers are integral, the result is integral.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "pick random ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "min",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "to ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "limit",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "min",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "limit",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "min",
                                "description": "the lower inclusive bound, eg: 0",
                                "default": "0"
                            },
                            {
                                "name": "max",
                                "description": "the upper inclusive bound, eg: 10",
                                "default": "10"
                            }
                        ],
                        "pyQName": "Math.random_range"
                    },
                    "Math.log": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "A number"
                            },
                            "jsDoc": "Returns the natural logarithm (base e) of a number."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A number"
                            }
                        ]
                    },
                    "Math.exp": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "A number"
                            },
                            "jsDoc": "Returns returns ``e^x``."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A number"
                            }
                        ]
                    },
                    "Math.sin": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math/trigonometry",
                            "paramHelp": {
                                "x": "An angle in radians"
                            },
                            "jsDoc": "Returns the sine of a number."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "An angle in radians"
                            }
                        ]
                    },
                    "Math.cos": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math/trigonometry",
                            "paramHelp": {
                                "x": "An angle in radians"
                            },
                            "jsDoc": "Returns the cosine of a number."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "An angle in radians"
                            }
                        ]
                    },
                    "Math.tan": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "An angle in radians"
                            },
                            "jsDoc": "Returns the tangent of a number."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "An angle in radians"
                            }
                        ]
                    },
                    "Math.asin": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "A number"
                            },
                            "jsDoc": "Returns the arcsine (in radians) of a number"
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A number"
                            }
                        ]
                    },
                    "Math.acos": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "A number"
                            },
                            "jsDoc": "Returns the arccosine (in radians) of a number"
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A number"
                            }
                        ]
                    },
                    "Math.atan": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "A number"
                            },
                            "jsDoc": "Returns the arctangent (in radians) of a number"
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A number"
                            }
                        ]
                    },
                    "Math.atan2": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "y": "A number",
                                "x": "A number"
                            },
                            "jsDoc": "Returns the arctangent of the quotient of its arguments."
                        },
                        "parameters": [
                            {
                                "name": "y",
                                "description": "A number"
                            },
                            {
                                "name": "x",
                                "description": "A number"
                            }
                        ]
                    },
                    "Math.sqrt": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "A numeric expression."
                            },
                            "jsDoc": "Returns the square root of a number."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A numeric expression."
                            }
                        ]
                    },
                    "Math.ceil": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math",
                            "paramHelp": {
                                "x": "A numeric expression."
                            },
                            "jsDoc": "Returns the smallest number greater than or equal to its numeric argument."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A numeric expression."
                            }
                        ]
                    },
                    "Math.floor": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math",
                            "paramHelp": {
                                "x": "A numeric expression."
                            },
                            "jsDoc": "Returns the greatest number less than or equal to its numeric argument."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A numeric expression."
                            }
                        ]
                    },
                    "Math.trunc": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math",
                            "paramHelp": {
                                "x": "A numeric expression."
                            },
                            "jsDoc": "Returns the number with the decimal part truncated."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A numeric expression."
                            }
                        ],
                        "pyQName": "int"
                    },
                    "Math.round": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math",
                            "paramHelp": {
                                "x": "The value to be rounded to the nearest number."
                            },
                            "jsDoc": "Returns a supplied numeric expression rounded to the nearest number."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "The value to be rounded to the nearest number."
                            }
                        ]
                    },
                    "Math.imul": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "The first number",
                                "y": "The second number"
                            },
                            "jsDoc": "Returns the value of integer signed 32 bit multiplication of two numbers."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "The first number"
                            },
                            {
                                "name": "y",
                                "description": "The second number"
                            }
                        ]
                    },
                    "Math.idiv": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "The first number",
                                "y": "The second number"
                            },
                            "jsDoc": "Returns the value of integer signed 32 bit division of two numbers."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "The first number"
                            },
                            {
                                "name": "y",
                                "description": "The second number"
                            }
                        ]
                    },
                    "control": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "color": "#FF5722",
                            "weight": 90,
                            "jsDoc": "Control flow"
                        }
                    },
                    "control._onCodeStart": {
                        "kind": -3,
                        "parameters": [
                            {
                                "name": "arg",
                                "type": "any"
                            }
                        ],
                        "pyQName": "control._on_code_start"
                    },
                    "control._onCodeStop": {
                        "kind": -3,
                        "parameters": [
                            {
                                "name": "arg",
                                "type": "any"
                            }
                        ],
                        "pyQName": "control._on_code_stop"
                    },
                    "NaN": {
                        "kind": 4,
                        "retType": "number",
                        "attributes": {
                            "jsDoc": "Constant representing Not-A-Number."
                        },
                        "pyQName": "na_n"
                    },
                    "Infinity": {
                        "kind": 4,
                        "retType": "number",
                        "attributes": {
                            "jsDoc": "Constant representing positive infinity."
                        },
                        "pyQName": "infinity"
                    },
                    "isNaN": {
                        "kind": -3,
                        "retType": "boolean",
                        "parameters": [
                            {
                                "name": "x"
                            }
                        ],
                        "pyQName": "is_na_n"
                    },
                    "Number@type": {
                        "kind": 9,
                        "retType": "Number",
                        "extendsTypes": [],
                        "pyQName": "Number"
                    },
                    "Number.isNaN": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "jsDoc": "Check if a given value is of type Number and it is a NaN."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "type": "any"
                            }
                        ],
                        "pyQName": "Number.is_na_n"
                    },
                    "StringMap": {
                        "kind": 9,
                        "retType": "StringMap",
                        "attributes": {
                            "jsDoc": "A dictionary from string key to string values"
                        },
                        "extendsTypes": []
                    },
                    "parseInt": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "text": "123"
                            },
                            "help": "text/parse-int",
                            "blockId": "string_parseint",
                            "block": "parse to integer %text",
                            "blockNamespace": "text",
                            "explicitDefaults": [
                                "text"
                            ],
                            "blockHidden": true,
                            "paramHelp": {
                                "text": "A string to convert into an integral number. eg: \"123\"",
                                "radix": "optional A value between 2 and 36 that specifies the base of the number in text."
                            },
                            "jsDoc": "Convert a string to an integer.\n\n\nIf this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.\nAll other strings are considered decimal.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "parse to integer ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "text",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "text",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "text",
                                "description": "A string to convert into an integral number. eg: \"123\"",
                                "type": "string",
                                "initializer": "123",
                                "default": "123"
                            },
                            {
                                "name": "radix",
                                "description": "optional A value between 2 and 36 that specifies the base of the number in text.",
                                "initializer": "undefined"
                            }
                        ],
                        "pyQName": "int"
                    },
                    "helpers": {
                        "kind": 5,
                        "retType": ""
                    },
                    "helpers.arrayFill": {
                        "kind": -3,
                        "retType": "T[]",
                        "parameters": [
                            {
                                "name": "O",
                                "type": "T[]"
                            },
                            {
                                "name": "value",
                                "type": "T"
                            },
                            {
                                "name": "start",
                                "initializer": "undefined"
                            },
                            {
                                "name": "end",
                                "initializer": "undefined"
                            }
                        ],
                        "pyQName": "helpers.array_fill"
                    },
                    "helpers.arraySplice": {
                        "kind": -3,
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "start"
                            },
                            {
                                "name": "len"
                            }
                        ],
                        "pyQName": "helpers.array_splice"
                    },
                    "helpers.arrayReverse": {
                        "kind": -3,
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            }
                        ],
                        "pyQName": "helpers.array_reverse"
                    },
                    "helpers.arrayShift": {
                        "kind": -3,
                        "retType": "T",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            }
                        ],
                        "pyQName": "helpers.array_shift"
                    },
                    "helpers.arrayJoin": {
                        "kind": -3,
                        "retType": "string",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "sep",
                                "type": "string",
                                "initializer": "undefined"
                            }
                        ],
                        "pyQName": "helpers.array_join"
                    },
                    "helpers.arrayUnshift": {
                        "kind": -3,
                        "retType": "number",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "value",
                                "type": "T"
                            }
                        ],
                        "pyQName": "helpers.array_unshift"
                    },
                    "helpers.arraySort": {
                        "kind": -3,
                        "retType": "T[]",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value1: T, value2: T) => number",
                                "initializer": "undefined",
                                "handlerParameters": [
                                    {
                                        "name": "value1",
                                        "type": "T"
                                    },
                                    {
                                        "name": "value2",
                                        "type": "T"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_sort"
                    },
                    "helpers.arrayMap": {
                        "kind": -3,
                        "retType": "U[]",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => U",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_map"
                    },
                    "helpers.arraySome": {
                        "kind": -3,
                        "retType": "boolean",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_some"
                    },
                    "helpers.arrayEvery": {
                        "kind": -3,
                        "retType": "boolean",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_every"
                    },
                    "helpers.arrayForEach": {
                        "kind": -3,
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => void",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_for_each"
                    },
                    "helpers.arrayFilter": {
                        "kind": -3,
                        "retType": "T[]",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_filter"
                    },
                    "helpers.arrayFind": {
                        "kind": -3,
                        "retType": "T",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(value: T, index: number) => boolean",
                                "handlerParameters": [
                                    {
                                        "name": "value",
                                        "type": "T"
                                    },
                                    {
                                        "name": "index",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "helpers.array_find"
                    },
                    "helpers.arrayReduce": {
                        "kind": -3,
                        "retType": "U",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "callbackfn",
                                "type": "(previousValue: U, currentValue: T, currentIndex: number) => U",
                                "handlerParameters": [
                                    {
                                        "name": "previousValue",
                                        "type": "U"
                                    },
                                    {
                                        "name": "currentValue",
                                        "type": "T"
                                    },
                                    {
                                        "name": "currentIndex",
                                        "type": "number"
                                    }
                                ]
                            },
                            {
                                "name": "initialValue",
                                "type": "U"
                            }
                        ],
                        "pyQName": "helpers.array_reduce"
                    },
                    "helpers.arrayConcat": {
                        "kind": -3,
                        "retType": "T[]",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "otherArr",
                                "type": "T[]"
                            }
                        ],
                        "pyQName": "helpers.array_concat"
                    },
                    "helpers.arraySlice": {
                        "kind": -3,
                        "retType": "T[]",
                        "parameters": [
                            {
                                "name": "arr",
                                "type": "T[]"
                            },
                            {
                                "name": "start",
                                "initializer": "undefined"
                            },
                            {
                                "name": "end",
                                "initializer": "undefined"
                            }
                        ],
                        "pyQName": "helpers.array_slice"
                    },
                    "helpers.stringReplace": {
                        "kind": -3,
                        "retType": "string",
                        "parameters": [
                            {
                                "name": "s",
                                "type": "string"
                            },
                            {
                                "name": "toReplace",
                                "type": "string"
                            },
                            {
                                "name": "replacer",
                                "type": "string | ((sub: string) => string)"
                            }
                        ],
                        "pyQName": "helpers.string_replace"
                    },
                    "helpers.stringReplaceAll": {
                        "kind": -3,
                        "retType": "string",
                        "parameters": [
                            {
                                "name": "s",
                                "type": "string"
                            },
                            {
                                "name": "toReplace",
                                "type": "string"
                            },
                            {
                                "name": "replacer",
                                "type": "string | ((sub: string) => string)"
                            }
                        ],
                        "pyQName": "helpers.string_replace_all"
                    },
                    "helpers.stringSlice": {
                        "kind": -3,
                        "retType": "string",
                        "parameters": [
                            {
                                "name": "s",
                                "type": "string"
                            },
                            {
                                "name": "start"
                            },
                            {
                                "name": "end",
                                "initializer": "undefined"
                            }
                        ],
                        "pyQName": "helpers.string_slice"
                    },
                    "helpers.stringToLowerCase": {
                        "kind": -3,
                        "retType": "string",
                        "parameters": [
                            {
                                "name": "s",
                                "type": "string"
                            }
                        ],
                        "pyQName": "helpers.string_to_lower_case"
                    },
                    "helpers.stringSplit": {
                        "kind": -3,
                        "retType": "string[]",
                        "parameters": [
                            {
                                "name": "S",
                                "type": "string"
                            },
                            {
                                "name": "separator",
                                "type": "string",
                                "initializer": "undefined"
                            },
                            {
                                "name": "limit",
                                "initializer": "undefined"
                            }
                        ],
                        "pyQName": "helpers.string_split"
                    },
                    "helpers.stringTrim": {
                        "kind": -3,
                        "retType": "string",
                        "parameters": [
                            {
                                "name": "s",
                                "type": "string"
                            }
                        ],
                        "pyQName": "helpers.string_trim"
                    },
                    "helpers.isWhitespace": {
                        "kind": -3,
                        "retType": "boolean",
                        "parameters": [
                            {
                                "name": "c"
                            }
                        ],
                        "pyQName": "helpers.is_whitespace"
                    },
                    "helpers.stringEmpty": {
                        "kind": -3,
                        "retType": "boolean",
                        "parameters": [
                            {
                                "name": "S",
                                "type": "string"
                            }
                        ],
                        "pyQName": "helpers.string_empty"
                    },
                    "Math.clamp": {
                        "kind": -3,
                        "retType": "number",
                        "parameters": [
                            {
                                "name": "min"
                            },
                            {
                                "name": "max"
                            },
                            {
                                "name": "value"
                            }
                        ]
                    },
                    "Math.abs": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math/abs",
                            "paramHelp": {
                                "x": "A numeric expression for which the absolute value is needed."
                            },
                            "jsDoc": "Returns the absolute value of a number (the value without regard to whether it is positive or negative).\nFor example, the absolute value of -5 is the same as the absolute value of 5."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "A numeric expression for which the absolute value is needed."
                            }
                        ],
                        "pyQName": "abs"
                    },
                    "Math.sign": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "The numeric expression to test"
                            },
                            "jsDoc": "Returns the sign of the x, indicating whether x is positive, negative or zero."
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "The numeric expression to test"
                            }
                        ]
                    },
                    "Math.max": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math/max",
                            "jsDoc": "Returns the larger of two supplied numeric expressions."
                        },
                        "parameters": [
                            {
                                "name": "a"
                            },
                            {
                                "name": "b"
                            }
                        ],
                        "pyQName": "max"
                    },
                    "Math.min": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "help": "math/min",
                            "jsDoc": "Returns the smaller of two supplied numeric expressions."
                        },
                        "parameters": [
                            {
                                "name": "a"
                            },
                            {
                                "name": "b"
                            }
                        ],
                        "pyQName": "min"
                    },
                    "Math.roundWithPrecision": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramHelp": {
                                "x": "the number to round",
                                "digits": "the number of resulting digits"
                            },
                            "jsDoc": "Rounds ``x`` to a number with the given number of ``digits``"
                        },
                        "parameters": [
                            {
                                "name": "x",
                                "description": "the number to round"
                            },
                            {
                                "name": "digits",
                                "description": "the number of resulting digits"
                            }
                        ],
                        "pyQName": "Math.round_with_precision"
                    },
                    "__internal": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "blockHidden": true
                        }
                    },
                    "__internal.__downUp": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "shim": "TD_ID",
                            "blockHidden": true,
                            "blockId": "toggleDownUp",
                            "block": "%down",
                            "paramFieldEditor": {
                                "down": "toggledownup"
                            },
                            "paramFieldEditorOptions": {
                                "down": {
                                    "decompileLiterals": "true"
                                }
                            },
                            "jsDoc": "A shim to render a boolean as a down/up toggle",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "down",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "down",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "down",
                                "type": "boolean"
                            }
                        ]
                    },
                    "__internal.__upDown": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "shim": "TD_ID",
                            "blockHidden": true,
                            "blockId": "toggleUpDown",
                            "block": "%up",
                            "paramFieldEditor": {
                                "up": "toggleupdown"
                            },
                            "paramFieldEditorOptions": {
                                "up": {
                                    "decompileLiterals": "true"
                                }
                            },
                            "jsDoc": "A shim to render a boolean as a up/down toggle",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "up",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "up",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "up",
                                "type": "boolean"
                            }
                        ]
                    },
                    "__internal.__highLow": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "shim": "TD_ID",
                            "blockHidden": true,
                            "blockId": "toggleHighLow",
                            "block": "%high",
                            "paramFieldEditor": {
                                "high": "togglehighlow"
                            },
                            "paramFieldEditorOptions": {
                                "high": {
                                    "decompileLiterals": "true"
                                }
                            },
                            "jsDoc": "A shim to render a boolean as a high/low toggle",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "high",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "high",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "high",
                                "type": "boolean"
                            }
                        ]
                    },
                    "__internal.__onOff": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "shim": "TD_ID",
                            "blockHidden": true,
                            "blockId": "toggleOnOff",
                            "block": "%on",
                            "paramFieldEditor": {
                                "on": "toggleonoff"
                            },
                            "paramFieldEditorOptions": {
                                "on": {
                                    "decompileLiterals": "true"
                                }
                            },
                            "jsDoc": "A shim to render a boolean as a on/off toggle",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "on",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "on",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "on",
                                "type": "boolean"
                            }
                        ]
                    },
                    "__internal.__yesNo": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "shim": "TD_ID",
                            "blockHidden": true,
                            "blockId": "toggleYesNo",
                            "block": "%yes",
                            "paramFieldEditor": {
                                "yes": "toggleyesno"
                            },
                            "paramFieldEditorOptions": {
                                "yes": {
                                    "decompileLiterals": "true"
                                }
                            },
                            "jsDoc": "A shim to render a boolean as a yes/no toggle",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "yes",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "yes",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "yes",
                                "type": "boolean"
                            }
                        ]
                    },
                    "__internal.__winLose": {
                        "kind": -3,
                        "retType": "boolean",
                        "attributes": {
                            "shim": "TD_ID",
                            "blockHidden": true,
                            "blockId": "toggleWinLose",
                            "block": "%win",
                            "paramFieldEditor": {
                                "win": "togglewinlose"
                            },
                            "paramFieldEditorOptions": {
                                "win": {
                                    "decompileLiterals": "true"
                                }
                            },
                            "jsDoc": "A shim to render a boolean as a win/lose toggle",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "win",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "win",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "win",
                                "type": "boolean"
                            }
                        ]
                    },
                    "__internal.__colorNumberPicker": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "value": "#ff0000",
                                "color": "#ff0000"
                            },
                            "blockId": "colorNumberPicker",
                            "block": "%value",
                            "blockHidden": true,
                            "shim": "TD_ID",
                            "colorSecondary": "#FFFFFF",
                            "paramFieldEditor": {
                                "value": "colornumber"
                            },
                            "paramFieldEditorOptions": {
                                "value": {
                                    "decompileLiterals": "true",
                                    "colours": "[\"#ff0000\",\"#ff8000\",\"#ffff00\",\"#ff9da5\",\"#00ff00\",\"#b09eff\",\"#00ffff\",\"#007fff\",\"#65471f\",\"#0000ff\",\"#7f00ff\",\"#ff0080\",\"#ff00ff\",\"#ffffff\",\"#999999\",\"#000000\"]",
                                    "columns": "4",
                                    "className": "rgbColorPicker"
                                }
                            },
                            "explicitDefaults": [
                                "value"
                            ],
                            "paramHelp": {
                                "color": "color, eg: #ff0000"
                            },
                            "jsDoc": "Get the color wheel field editor",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "value",
                                "initializer": "#ff0000",
                                "default": "#ff0000"
                            }
                        ]
                    },
                    "__internal.__colorWheelPicker": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "value": "10"
                            },
                            "blockId": "colorWheelPicker",
                            "block": "%value",
                            "blockHidden": true,
                            "shim": "TD_ID",
                            "colorSecondary": "#FFFFFF",
                            "paramFieldEditor": {
                                "value": "colorwheel"
                            },
                            "paramFieldEditorOptions": {
                                "value": {
                                    "decompileLiterals": "true",
                                    "sliderWidth": "200",
                                    "min": "0",
                                    "max": "255"
                                }
                            },
                            "paramHelp": {
                                "value": "value between 0 to 255 to get a color value, eg: 10"
                            },
                            "jsDoc": "Get the color wheel field editor",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "value",
                                "description": "value between 0 to 255 to get a color value, eg: 10",
                                "default": "10"
                            }
                        ]
                    },
                    "__internal.__colorWheelHsvPicker": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "value": "10"
                            },
                            "blockId": "colorWheelHsvPicker",
                            "block": "%value",
                            "blockHidden": true,
                            "shim": "TD_ID",
                            "colorSecondary": "#FFFFFF",
                            "paramFieldEditor": {
                                "value": "colorwheel"
                            },
                            "paramFieldEditorOptions": {
                                "value": {
                                    "decompileLiterals": "true",
                                    "sliderWidth": "200",
                                    "min": "0",
                                    "max": "255",
                                    "channel": "hsvfast"
                                }
                            },
                            "paramHelp": {
                                "value": "value between 0 to 255 to get a color value, eg: 10"
                            },
                            "jsDoc": "Get the color wheel field editor using HSV values",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "value",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "value",
                                "description": "value between 0 to 255 to get a color value, eg: 10",
                                "default": "10"
                            }
                        ]
                    },
                    "__internal.__speedPicker": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "speed": "50"
                            },
                            "blockId": "speedPicker",
                            "block": "%speed",
                            "shim": "TD_ID",
                            "paramFieldEditor": {
                                "speed": "speed"
                            },
                            "colorSecondary": "#FFFFFF",
                            "weight": 0,
                            "blockHidden": true,
                            "paramFieldEditorOptions": {
                                "speed": {
                                    "decompileLiterals": "1"
                                }
                            },
                            "paramHelp": {
                                "speed": "the speed, eg: 50"
                            },
                            "jsDoc": "A speed picker",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "speed",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "speed",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "speed",
                                "description": "the speed, eg: 50",
                                "default": "50"
                            }
                        ]
                    },
                    "__internal.__turnRatioPicker": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "turnratio": "0"
                            },
                            "blockId": "turnRatioPicker",
                            "block": "%turnratio",
                            "shim": "TD_ID",
                            "paramFieldEditor": {
                                "turnratio": "turnratio"
                            },
                            "colorSecondary": "#FFFFFF",
                            "weight": 0,
                            "blockHidden": true,
                            "paramFieldEditorOptions": {
                                "turnRatio": {
                                    "decompileLiterals": "1"
                                }
                            },
                            "paramHelp": {
                                "turnratio": "the turn ratio, eg: 0"
                            },
                            "jsDoc": "A turn ratio picker",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "turnratio",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "turnratio",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "turnratio",
                                "description": "the turn ratio, eg: 0",
                                "default": "0"
                            }
                        ]
                    },
                    "__internal.__protractor": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "blockId": "protractorPicker",
                            "block": "%angle",
                            "shim": "TD_ID",
                            "paramFieldEditor": {
                                "angle": "protractor"
                            },
                            "paramFieldEditorOptions": {
                                "angle": {
                                    "decompileLiterals": "1"
                                }
                            },
                            "colorSecondary": "#FFFFFF",
                            "blockHidden": true,
                            "jsDoc": "A field editor that displays a protractor",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "angle",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "angle",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "angle"
                            }
                        ]
                    },
                    "__internal.__timePicker": {
                        "kind": -3,
                        "retType": "number",
                        "attributes": {
                            "paramDefl": {
                                "ms": "500"
                            },
                            "blockId": "timePicker",
                            "block": "%ms",
                            "blockHidden": true,
                            "shim": "TD_ID",
                            "colorSecondary": "#FFFFFF",
                            "paramFieldEditor": {
                                "ms": "numberdropdown"
                            },
                            "paramFieldEditorOptions": {
                                "ms": {
                                    "decompileLiterals": "true",
                                    "data": "[[\"100 ms\", 100], [\"200 ms\", 200], [\"500 ms\", 500], [\"1 second\", 1000], [\"2 seconds\", 2000], [\"5 seconds\", 5000]]"
                                }
                            },
                            "paramHelp": {
                                "ms": "time duration in milliseconds, eg: 500, 1000"
                            },
                            "jsDoc": "Get the time field editor",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "param",
                                        "name": "ms",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "ms",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "ms",
                                "description": "time duration in milliseconds, eg: 500, 1000",
                                "default": "500"
                            }
                        ]
                    },
                    "Direction": {
                        "kind": 6,
                        "retType": "Direction",
                        "extendsTypes": [
                            "Direction",
                            "Number"
                        ]
                    },
                    "Direction.Left": {
                        "retType": "Direction",
                        "attributes": {
                            "block": "left",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "left",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Direction.Left",
                            "Number"
                        ],
                        "pyQName": "Direction.LEFT"
                    },
                    "Direction.Right": {
                        "retType": "Direction",
                        "attributes": {
                            "block": "right",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "right",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Direction.Right",
                            "Number"
                        ],
                        "pyQName": "Direction.RIGHT"
                    },
                    "Hop": {
                        "kind": 6,
                        "retType": "Hop",
                        "extendsTypes": [
                            "Hop",
                            "Number"
                        ]
                    },
                    "Hop.Short": {
                        "retType": "Hop",
                        "attributes": {
                            "block": "short",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "short",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Hop.Short",
                            "Number"
                        ],
                        "pyQName": "Hop.SHORT"
                    },
                    "Hop.Long": {
                        "retType": "Hop",
                        "attributes": {
                            "block": "long",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "long",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Hop.Long",
                            "Number"
                        ],
                        "pyQName": "Hop.LONG"
                    },
                    "Hop.Silly": {
                        "retType": "Hop",
                        "attributes": {
                            "block": "silly",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "silly",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Hop.Silly",
                            "Number"
                        ],
                        "pyQName": "Hop.SILLY"
                    },
                    "Hop.Incredible": {
                        "retType": "Hop",
                        "attributes": {
                            "block": "wow",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "wow",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Hop.Incredible",
                            "Number"
                        ],
                        "pyQName": "Hop.INCREDIBLE"
                    },
                    "Hop.Astronomical": {
                        "retType": "Hop",
                        "attributes": {
                            "block": "to the moon!",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "to the moon!",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "extendsTypes": [
                            "Hop.Astronomical",
                            "Number"
                        ],
                        "pyQName": "Hop.ASTRONOMICAL"
                    },
                    "hare": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "color": "#D4BC00",
                            "weight": 95
                        }
                    },
                    "hare.hop": {
                        "kind": -3,
                        "attributes": {
                            "blockId": "sampleHop",
                            "block": "hop %hop on color %color=colorNumberPicker",
                            "paramFieldEditor": {
                                "hop": "gridpicker"
                            },
                            "jsDoc": "This is hop",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "hop ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "hop",
                                        "ref": false
                                    },
                                    {
                                        "kind": "label",
                                        "text": " on color ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "color",
                                        "shadowBlockId": "colorNumberPicker",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "hop",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "color",
                                        "shadowBlockId": "colorNumberPicker",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "hop",
                                "type": "Hop",
                                "isEnum": true
                            },
                            {
                                "name": "color"
                            }
                        ]
                    },
                    "hare.onLand": {
                        "kind": -3,
                        "attributes": {
                            "blockId": "sampleOnLand",
                            "block": "on land",
                            "optionalVariableArgs": true,
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "on land",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "parameters": [
                            {
                                "name": "handler",
                                "type": "(height: number, more: number, most: number) => void",
                                "handlerParameters": [
                                    {
                                        "name": "height",
                                        "type": "number"
                                    },
                                    {
                                        "name": "more",
                                        "type": "number"
                                    },
                                    {
                                        "name": "most",
                                        "type": "number"
                                    }
                                ]
                            }
                        ],
                        "pyQName": "hare.on_land"
                    },
                    "turtle": {
                        "kind": 5,
                        "retType": "",
                        "attributes": {
                            "color": "#00BCD4",
                            "weight": 100,
                            "jsDoc": "Basic functionalities."
                        }
                    },
                    "turtle.forward": {
                        "kind": -3,
                        "attributes": {
                            "paramDefl": {
                                "steps": "1"
                            },
                            "callingConvention": 2,
                            "weight": 90,
                            "blockId": "sampleForward",
                            "block": "forward %steps",
                            "promise": "true",
                            "paramHelp": {
                                "steps": "number of steps to move, eg: 1"
                            },
                            "jsDoc": "Moves the sprite forward",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "forward ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "steps",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "steps",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "steps",
                                "description": "number of steps to move, eg: 1",
                                "default": "1"
                            }
                        ]
                    },
                    "turtle.turn": {
                        "kind": -3,
                        "attributes": {
                            "paramDefl": {
                                "direction": "Direction.Left",
                                "angle": "90"
                            },
                            "callingConvention": 2,
                            "weight": 85,
                            "blockId": "sampleTurn",
                            "block": "turn %direction|by %angle degrees",
                            "paramMin": {
                                "angle": "-180"
                            },
                            "paramMax": {
                                "angle": "180"
                            },
                            "promise": "true",
                            "paramHelp": {
                                "direction": "the direction to turn, eg: Direction.Left",
                                "angle": "degrees to turn, eg:90"
                            },
                            "jsDoc": "Moves the sprite forward",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "turn ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "direction",
                                        "ref": false
                                    },
                                    {
                                        "kind": "break"
                                    },
                                    {
                                        "kind": "label",
                                        "text": "by ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "angle",
                                        "ref": false
                                    },
                                    {
                                        "kind": "label",
                                        "text": " degrees",
                                        "style": []
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "direction",
                                        "ref": false
                                    },
                                    {
                                        "kind": "param",
                                        "name": "angle",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "direction",
                                "description": "the direction to turn, eg: Direction.Left",
                                "type": "Direction",
                                "default": "Direction.Left",
                                "isEnum": true
                            },
                            {
                                "name": "angle",
                                "description": "degrees to turn, eg:90",
                                "default": "90",
                                "options": {
                                    "min": {
                                        "value": "-180"
                                    },
                                    "max": {
                                        "value": "180"
                                    }
                                }
                            }
                        ]
                    },
                    "turtle.onBump": {
                        "kind": -3,
                        "attributes": {
                            "blockId": "onBump",
                            "block": "on bump",
                            "paramHelp": {
                                "handler": ""
                            },
                            "jsDoc": "Triggers when the turtle bumps a wall",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "on bump",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "parameters": [
                            {
                                "name": "handler",
                                "type": "() => void",
                                "handlerParameters": []
                            }
                        ],
                        "pyQName": "turtle.on_bump"
                    },
                    "loops": {
                        "kind": 5,
                        "retType": ""
                    },
                    "loops.forever": {
                        "kind": -3,
                        "attributes": {
                            "help": "functions/forever",
                            "weight": 55,
                            "blockGap": "8",
                            "blockId": "device_forever",
                            "block": "forever",
                            "paramHelp": {
                                "body": "the code to repeat"
                            },
                            "jsDoc": "Repeats the code forever in the background. On each iteration, allows other code to run.",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "forever",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "parameters": [
                            {
                                "name": "body",
                                "description": "the code to repeat",
                                "type": "() => void",
                                "handlerParameters": []
                            }
                        ]
                    },
                    "loops.pause": {
                        "kind": -3,
                        "attributes": {
                            "paramDefl": {
                                "ms": "100"
                            },
                            "callingConvention": 2,
                            "help": "functions/pause",
                            "weight": 54,
                            "block": "pause (ms) %pause",
                            "blockId": "device_pause",
                            "promise": "true",
                            "paramHelp": {
                                "ms": "how long to pause for, eg: 100, 200, 500, 1000, 2000"
                            },
                            "jsDoc": "Pause for the specified time in milliseconds",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "pause (ms) ",
                                        "style": []
                                    },
                                    {
                                        "kind": "param",
                                        "name": "pause",
                                        "ref": false
                                    }
                                ],
                                "parameters": [
                                    {
                                        "kind": "param",
                                        "name": "pause",
                                        "ref": false
                                    }
                                ]
                            }
                        },
                        "parameters": [
                            {
                                "name": "ms",
                                "description": "how long to pause for, eg: 100, 200, 500, 1000, 2000",
                                "default": "100"
                            }
                        ]
                    },
                    "console": {
                        "kind": 5,
                        "retType": ""
                    },
                    "console.log": {
                        "kind": -3,
                        "attributes": {
                            "jsDoc": "Print out message"
                        },
                        "parameters": [
                            {
                                "name": "msg",
                                "type": "string"
                            }
                        ],
                        "pyQName": "print"
                    },
                    "Sprite": {
                        "kind": 8,
                        "retType": "Sprite",
                        "attributes": {
                            "jsDoc": "A ghost on the screen."
                        },
                        "extendsTypes": []
                    },
                    "Sprite.x": {
                        "kind": 2,
                        "retType": "number",
                        "attributes": {
                            "shim": ".x",
                            "jsDoc": "The X-coordiante"
                        },
                        "isInstance": true
                    },
                    "Sprite.y": {
                        "kind": 2,
                        "retType": "number",
                        "attributes": {
                            "shim": ".y",
                            "jsDoc": "The Y-coordiante"
                        },
                        "isInstance": true
                    },
                    "Sprite.forward": {
                        "kind": -1,
                        "attributes": {
                            "callingConvention": 2,
                            "shim": ".forwardAsync",
                            "promise": "true",
                            "jsDoc": "Move the thing forward"
                        },
                        "parameters": [
                            {
                                "name": "steps"
                            }
                        ],
                        "isInstance": true
                    },
                    "sprites": {
                        "kind": 5,
                        "retType": ""
                    },
                    "sprites.createSprite": {
                        "kind": -3,
                        "retType": "Sprite",
                        "attributes": {
                            "blockId": "sampleCreate",
                            "block": "createSprite",
                            "jsDoc": "Creates a new sprite",
                            "_def": {
                                "parts": [
                                    {
                                        "kind": "label",
                                        "text": "createSprite",
                                        "style": []
                                    }
                                ],
                                "parameters": []
                            }
                        },
                        "parameters": [],
                        "pyQName": "sprites.create_sprite"
                    }
                }
            },
            "sha": "84d91f50fad36f9d6fc56aad55628ca36ada5d27ac021000e30209ac806242b7"
        },
        "libs/blocksprj": {
            "apis": {
                "byQName": {}
            },
            "sha": "d8152683b8cbe7897b07b314fb80d0434290542d327f4af0b2e0bb9e420e47aa"
        }
    }
}