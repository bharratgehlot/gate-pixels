const e=[{id:1,type:"MCQ",question:"In a two-pass assembler, resolution of subroutine calls and inclusion of labels in the symbol table is done during",note:"ISRO CSE 2020",options:["Second pass","first pass and second pass respectively","second pass and first pass respectively","first pass"],correctAnswers:["B"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:2,type:"MCQ",question:`The number of tokens in the following C code segment is:

switch(inputvalue)
{
    case 1 : b =c*d; break;
    default : b =b++; break;
}`,note:"ISRO CSE 2020",options:["27","29","26","24"],correctAnswers:["C"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:3,type:"MCQ",question:`Consider the following statements.

I. Symbol table is accessed only during lexical analysis and syntax analysis.
II. Compilers for programming languages that support recursion necessarily need heap storage for memory allocation in the run-time environment.
III. Errors violating the condition 'any variable must be declared before its use' are detected during syntax analysis.

Which of the above statements is/are TRUE?`,note:null,options:["I only","I and III only","II only","None of I, II and III"],correctAnswers:["D"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:3,type:"MCQ",question:`A lexical analyzer uses the following patterns to recognize three tokens T₁, T₂, and T₃ over the alphabet {a,b,c}.

T₁: a?(b|c)*a
T₂: b?(a|c)*b
T₃: c?(b|a)*c

Note that 'x?' means 0 or 1 occurrence of the symbol x. Note also that the analyzer outputs the token that matches the longest possible prefix.

If the string bbaacabc is processed by the analyzer, which one of the following is the sequence of tokens it outputs?`,note:null,options:["T₁ T₂ T₃","T₁ T₁ T₃","T₂ T₁ T₃","T₃ T₃"],correctAnswers:["B"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:4,type:"MCQ",question:"The output of a lexical analyzer is",note:null,options:["A parse tree","Intermediate code","Machine code","A stream of tokens"],correctAnswers:["D"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:5,type:"MCQ",question:"Yacc stands for",note:null,options:["yet accept compiler constructs","yet accept compiler compiler","yet another compiler constructs","yet another compiler compiler"],correctAnswers:["D"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:6,type:"MCQ",question:`The number of tokens in the following C statement is:

printf("i=%d, &i=%x", i, &i);`,note:null,options:["3","26","10","21"],correctAnswers:["C"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:7,type:"MCQ",question:"A symbol table of length 152 is processing 25 entries at any instant. What is occupation density?",note:null,options:["0.164","127","8.06","6.08"],correctAnswers:["A"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:8,type:"MCQ",question:"Number of comparisons required for an unsuccessful search of an element in a sequential search organized, fixed length, symbol table of length L is",note:null,options:["L","L/2","(L+1)/2","2L"],correctAnswers:["A"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:9,type:"MCQ",question:"The lexical analysis for a modern computer language such as Java needs the power of which one of the following machine models in a necessary and sufficient sense?",note:null,options:["Finite state automata","Deterministic pushdown automata","Non-Deterministic pushdown automata","Turing machine"],correctAnswers:["A"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:10,type:"MCQ",question:"In a compiler, keywords of a language are recognized during",note:null,options:["parsing of the program","the code generation","the lexical analysis of the program","dataflow analysis"],correctAnswers:["C"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:11,type:"MCQ",question:"Which data structure in a compiler is used for managing information about variables and their attributes?",note:null,options:["Abstract syntax tree","Symbol table","Semantic stack","Parse table"],correctAnswers:["B"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:12,type:"MCQ",question:`The number of tokens in the following C statement is:

printf("i=%d, &i=%x", i, &i);`,note:null,options:["3","26","10","21"],correctAnswers:["C"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:13,type:"MCQ",question:"In a compiler the module that checks every character of the source text is called:",note:null,options:["The code generator.","The code optimiser.","The lexical analyser.","The syntax analyser."],correctAnswers:["C"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"},{id:14,type:"MCQ",question:`The pass numbers for each of the following activities:
i. object code generation
ii. literals added to literal table
iii. listing printed
iv. address resolution of local symbols that occur in a two pass assembler
respectively are`,note:null,options:["1, 2, 1, 2","2, 1, 2, 1","2, 1, 1, 2","1, 2, 2, 2"],correctAnswers:["C"],marks:null,negativeMarks:null,image:null,subject:"Compiler Design"}];export{e as default};
