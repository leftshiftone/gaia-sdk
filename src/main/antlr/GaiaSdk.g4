/*
 * Lexer Rules
 */

grammar GaiaSdk;

COLON             : ':';
CURLY_LEFT        : '{';
CURLY_RIGHT       : '}';
ROUND_LEFT        : '(';
ROUND_RIGHT       : ')';
SQUARE_LEFT       : '[';
SQUARE_RIGHT      : ']';
QUESTION_MARK     : '?';
COMMA             : ',';
AT                : '@';
DEPRECATED        : 'deprecated';
EQUALS            : '=';
TRUE              : 'true';
FALSE             : 'false';
TYPE              : 'type';
ENUM              : 'enum';
INTERFACE         : 'interface';
SCALAR            : 'scalar';
IMPLEMENTS        : 'implements';
INPUT             : 'input';
MANDATORY         : '!';
SCALAR_TYPE       : 'String' | 'Int' | 'Float' | 'Boolean';

IDENTIFIER    : Letter LetterOrDigit*;
CHAR_SEQUENCE : '"' StringCharacter* '"' | '"""' StringCharacter* '"""';
NUMBER        : Digit+;

fragment Digit           : '-'?[0-9];
fragment Letter          : [a-zA-Z];
fragment LetterOrDigit   : [a-zA-Z0-9_];
fragment StringCharacter :	~'"';

// Whitespace and comments
WHITESPACE   : [ \t\r\n\u000C]+ -> skip;
LINE_COMMENT : '#' ~[\r\n]*    -> skip;

/*
 * Parser Rules
 */
compilation  : (type | interface_ | scalar | input | enum_)+;
type         : description? TYPE identifier (IMPLEMENTS identifier)? CURLY_LEFT field+ CURLY_RIGHT;
identifier   : IDENTIFIER | TYPE;
description  : CHAR_SEQUENCE;
field        : description? identifier (ROUND_LEFT argument (COMMA argument)* ROUND_RIGHT)? COLON datatype MANDATORY? (EQUALS value)? annotation*;
argument     : identifier COLON datatype MANDATORY? (EQUALS value)?;
datatype     : (scalarType | simpleType | listType);
scalarType   : SCALAR_TYPE;
simpleType   : identifier QUESTION_MARK?;
listType     : SQUARE_LEFT datatype SQUARE_RIGHT;
annotation   : deprecated;
deprecated   : AT DEPRECATED ROUND_LEFT CHAR_SEQUENCE ROUND_RIGHT;

interface_   : description? INTERFACE identifier CURLY_LEFT field+ CURLY_RIGHT;
enum_        : ENUM identifier CURLY_LEFT identifier+ CURLY_RIGHT;
input        : description? INPUT identifier CURLY_LEFT field+ CURLY_RIGHT;
scalar       : SCALAR identifier;
// value
booleanValue : (TRUE | FALSE);
stringValue  : CHAR_SEQUENCE;
intValue     : NUMBER;
floatValue   : NUMBER;
longValue    : NUMBER;
value        : (booleanValue | stringValue | intValue | floatValue | longValue);
