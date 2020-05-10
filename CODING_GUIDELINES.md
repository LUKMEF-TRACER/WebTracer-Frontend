Like other projects, we also have some guidelines to keep to the

Make your code readable and sensible, and don't try to be clever.

As for more concrete guidelines, just imitate the existing code
(this is a good guideline, no matter which project you are
contributing to). It is always preferable to match the _local_
convention. New code added to the rpo is expected to match
the overall style of existing code. Modifications to existing
code is expected to match the style the surrounding code already
uses (even if it doesn't match the overall style of existing code).

But if you must have a list of rules, here they are.

 - Defined components are named following the vue's multi-word principle and using camel-case E.g
    AppQuestionaire.vue, BarNotifier.js

 - Components to be public should be placed in the entry file of components folder

 - We use tabs for indentation.

 - We prefer a space between the function name and the parentheses,
   and no space inside the parentheses. The opening "{" should also
   be on the same line.

 - We use tabs to indent, and interpret tabs as taking up to
   8 spaces.

 - We try to keep to at most 80 characters per line.

 - Declaring a variable in the for loop "for (int i = 0; i < 10; i++)"
   is still not allowed in this codebase.

 - NULL pointers shall be written as NULL, not as 0.

 - Use whitespace around operators and keywords, but not inside
   parentheses and not around functions. So:

        while (condition)
		func(bar + 1);

   and not:

        while( condition )
		func (bar+1);

 - We avoid using braces unnecessarily.  I.e.

	if (bla) {
		x = 1;
	}

   is frowned upon. But there are a few exceptions:

	- When the statement extends over a few lines (e.g., a while loop
	  with an embedded conditional, or a comment). E.g.:

		while (foo) {
			if (x)
				one();
			else
				two();
		}

		if (foo) {
			/*
			 * This one requires some explanation,
			 * so we're better off with braces to make
			 * it obvious that the indentation is correct.
			 */
			doit();
		}

	- When there are multiple arms to a conditional and some of them
	  require braces, enclose even a single line block in braces for
	  consistency. E.g.:

		if (foo) {
			doit();
		} else {
			one();
			two();
			three();
		}

 - We try to avoid assignments in the condition of an "if" statement.

 - Try to make your code understandable.  You may put comments
   in, but comments invariably tend to stale out when the code
   they were describing changes.  Often splitting a function
   into two makes the intention of the code much clearer.

 - Multi-line comments include their delimiters on separate lines from
   the text.  E.g.

	/*
	 * A very long
	 * multi-line comment.
	 */

 - Double negation is often harder to understand than no negation
   at all.

 - There are two schools of thought when it comes to comparison,
   especially inside a loop. Some people prefer to have the less stable
   value on the left hand side and the more stable value on the right hand
   side, e.g. if you have a loop that counts variable i down to the
   lower bound,

	while (i > lower_bound) {
		do something;
		i--;
	}

   Other people prefer to have the textual order of values match the
   actual order of values in their comparison, so that they can
   mentally draw a number line from left to right and place these
   values in order, i.e.

	while (lower_bound < i) {
		do something;
		i--;
	}

   Both are valid, and we use both.  However, the more "stable" the
   stable side becomes, the more we tend to prefer the former
   (comparison with a constant, "i > 0", is an extreme example).
   Just do not mix styles in the same part of the code and mimic
   existing styles in the neighbourhood.

 - There are two schools of thought when it comes to splitting a long
   logical line into multiple lines.  Some people push the second and
   subsequent lines far enough to the right with tabs and align them:

        if (the_beginning_of_a_very_long_expression_that_has_to ||
		span_more_than_a_single_line_of ||
		the_source_text) {
                ...

   while other people prefer to align the second and the subsequent
   lines with the column immediately inside the opening parenthesis,
   with tabs and spaces, following our "tabstop is always a multiple
   of 8" convention:

        if (the_beginning_of_a_very_long_expression_that_has_to ||
	    span_more_than_a_single_line_of ||
	    the_source_text) {
                ...

   Both are valid, and we use both.  Again, just do not mix styles in
   the same part of the code and mimic existing styles in the
   neighbourhood.

 - When splitting a long logical line, some people change line before
   a binary operator, so that the result looks like a parse tree when
   you turn your head 90-degrees counterclockwise:

        if (the_beginning_of_a_very_long_expression_that_has_to
	    || span_more_than_a_single_line_of_the_source_text) {

   while other people prefer to leave the operator at the end of the
   line:

        if (the_beginning_of_a_very_long_expression_that_has_to ||
	    span_more_than_a_single_line_of_the_source_text) {

   Both are valid, but we tend to use the latter more, unless the
   expression gets fairly complex, in which case the former tends to
   be easier to read.  Again, just do not mix styles in the same part
   of the code and mimic existing styles in the neighbourhood.

 - When splitting a long logical line, with everything else being
   equal, it is preferable to split after the operator at higher
   level in the parse tree.  That is, this is more preferable:

	if (a_very_long_variable * that_is_used_in +
	    a_very_long_expression) {
		...

   than

	if (a_very_long_variable *
	    that_is_used_in + a_very_long_expression) {
		...

 - Some clever tricks, like using the !! operator with arithmetic
   constructs, can be extremely confusing to others.  Avoid them,
   unless there is a compelling reason to use them.

 - When you come up with an API, document its functions and structures
   in the header file that exposes the API to its callers. Use what is
   in "strbuf.h" as a model for the appropriate tone and level of
   detail.

 - When we pass <string, length> pair to functions, we should try to
   pass them in that order.

 - Don't overuse statement modifiers unless using them makes the
   result easier to follow.

	... do something ...
	do_this() unless (condition);
        ... do something else ...

   is more readable than:

	... do something ...
	unless (condition) {
		do_this();
	}
        ... do something else ...

   *only* when the condition is so rare that do_this() will be almost
   always called.

 - We try to avoid assignments inside "if ()" conditions.

Error Messages

 - Do not end error messages with a full stop.

 - Do not capitalize ("unable to open %s", not "Unable to open %s")

 - Say what the error is first ("cannot open %s", not "%s: cannot open")