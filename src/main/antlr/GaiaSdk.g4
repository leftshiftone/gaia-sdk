/*
 * Lexer Rules
 */

grammar GaiaSdk;

COLON             : ':';
CURLY_LEFT        : '{';
CURLY_RIGHT       : '}';
REF               : 'ref';
LIST              : 'list';
ROUND_LEFT        : '(';
ROUND_RIGHT       : ')';
SQUARE_LEFT       : '[';
SQUARE_RIGHT      : ']';
QUESTION_MARK     : '?';
COMMA             : ',';
AT                : '@';
DEPRECATED        : 'Deprecated';
EQUALS            : '=';
TRUE              : 'true';
FALSE             : 'false';
INCOMING_TYPE     : 'IncomingType';
OUTGOING_TYPE     : 'OutgoingType';
QUERY             : 'query';
MUTATION          : 'mutation';
SUBSCRIPTION      : 'subscription';

IDENTIFIER    : Letter LetterOrDigit*;
CHAR_SEQUENCE : '"' StringCharacter* '"';
NUMBER        : Digit+;

fragment Digit           : '-'?[0-9];
fragment Letter          : [a-z];
fragment LetterOrDigit   : [a-zA-Z0-9_];
fragment StringCharacter :	~'"';

// Whitespace and comments
WHITESPACE   : [ \t\r\n\u000C]+ -> skip;
LINE_COMMENT : '//' ~[\r\n]*    -> skip;
SEMICOLON    : ';'              -> skip;

/*
 * Parser Rules
 */
compilation  : (query | mutation | subscription)+;
query        : QUERY CURLY_LEFT (entity | field | option)+ CURLY_RIGHT;
mutation     : MUTATION CURLY_LEFT (entity | field | option)+ CURLY_RIGHT;
subscription : SUBSCRIPTION CURLY_LEFT (entity | field | option)+ CURLY_RIGHT;
identifier   : IDENTIFIER;
entity       : annotation* (identifier (ROUND_LEFT argument (COMMA argument)* ROUND_RIGHT)? | (LIST ROUND_LEFT identifier (ROUND_LEFT argument (COMMA argument)* ROUND_RIGHT)? ROUND_RIGHT)) CURLY_LEFT (field | entity)+ CURLY_RIGHT;
field        : annotation* identifier (ROUND_LEFT argument (COMMA argument)* ROUND_RIGHT)? COLON type (EQUALS value)?;
option       : annotation* identifier COLON simpleType EQUALS value;
argument     : identifier COLON type (EQUALS value)?;
type         : (simpleType | refType | listType | arrayType);
simpleType   : identifier QUESTION_MARK?;
refType      : REF ROUND_LEFT identifier ROUND_RIGHT QUESTION_MARK?;
listType     : LIST ROUND_LEFT type ROUND_RIGHT QUESTION_MARK?;
arrayType    : simpleType SQUARE_LEFT SQUARE_RIGHT QUESTION_MARK?;
annotation   : (deprecated | incomingType | outgoingType);
deprecated   : AT DEPRECATED ROUND_LEFT CHAR_SEQUENCE ROUND_RIGHT;
incomingType : AT INCOMING_TYPE;
outgoingType : AT OUTGOING_TYPE;
// value
booleanValue : (TRUE | FALSE);
stringValue  : CHAR_SEQUENCE;
intValue     : NUMBER;
floatValue   : NUMBER;
longValue    : NUMBER;
value        : (booleanValue | stringValue | intValue | floatValue | longValue);
