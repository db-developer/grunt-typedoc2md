
<br><a name="module_grunt-typedoc2md/options/typedoc2md"></a>

## grunt-typedoc2md/options/typedoc2md
> options/typedoc2md.js: grunt-typedoc2md


* [grunt-typedoc2md/options/typedoc2md](#module_grunt-typedoc2md/options/typedoc2md)
    * [~getOptions()](#module_grunt-typedoc2md/options/typedoc2md..getOptions) ⇒ <code>Object</code>
    * [~getTaskOptions(task)](#module_grunt-typedoc2md/options/typedoc2md..getTaskOptions) ⇒ <code>Object</code>
    * [~toArgs(grunt, task)](#module_grunt-typedoc2md/options/typedoc2md..toArgs) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>


<br><a name="module_grunt-typedoc2md/options/typedoc2md..getOptions"></a>

### grunt-typedoc2md/options/typedoc2md~getOptions() ⇒ <code>Object</code>
> Defines and returns the set of options that is passed to task 'check_outdated'.

**Returns**: <code>Object</code> - check_outdated default options  

<br><a name="module_grunt-typedoc2md/options/typedoc2md..getTaskOptions"></a>

### grunt-typedoc2md/options/typedoc2md~getTaskOptions(task) ⇒ <code>Object</code>
> Returns grunt task specific options for 'typedoc2md'.>  Note: 'typedoc2md' default options and configuration>        options have already been merged!

**Returns**: <code>Object</code> - 'typedoc2md' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-typedoc2md/options/typedoc2md..toArgs"></a>

### grunt-typedoc2md/options/typedoc2md~toArgs(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
> Convert grunt task specific options for 'typedoc2md' to an >  array of arguments, which will be used for calling npm.

**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

