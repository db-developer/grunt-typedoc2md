
<br><a name="module_grunt-typedoc2md/tasks/typedoc2md"></a>

## grunt-typedoc2md/tasks/typedoc2md
> tasks/typedoc2md.js: grunt-typedoc2md


* [grunt-typedoc2md/tasks/typedoc2md](#module_grunt-typedoc2md/tasks/typedoc2md)
    * [~getTypeDoc()](#module_grunt-typedoc2md/tasks/typedoc2md..getTypeDoc) ⇒
    * [~readJSON(config)](#module_grunt-typedoc2md/tasks/typedoc2md..readJSON) ⇒ <code>object</code>
    * [~executeTypeDoc2MD(grunt, task, obj)](#module_grunt-typedoc2md/tasks/typedoc2md..executeTypeDoc2MD)
    * [~runTaskTypeDoc2MD()](#module_grunt-typedoc2md/tasks/typedoc2md..runTaskTypeDoc2MD) ⇒ <code>Promise</code>
    * [~registerMultiTaskTypeDoc2MD(grunt)](#module_grunt-typedoc2md/tasks/typedoc2md..registerMultiTaskTypeDoc2MD)


<br><a name="module_grunt-typedoc2md/tasks/typedoc2md..getTypeDoc"></a>

### grunt-typedoc2md/tasks/typedoc2md~getTypeDoc() ⇒
> Tries to load typedoc package

**Returns**: module typedoc  

<br><a name="module_grunt-typedoc2md/tasks/typedoc2md..readJSON"></a>

### grunt-typedoc2md/tasks/typedoc2md~readJSON(config) ⇒ <code>object</code>
> Trys to lod configfile


| Param | Type |
| --- | --- |
| config | <code>\*</code> | 


<br><a name="module_grunt-typedoc2md/tasks/typedoc2md..executeTypeDoc2MD"></a>

### grunt-typedoc2md/tasks/typedoc2md~executeTypeDoc2MD(grunt, task, obj)
> Return a promise for executing


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |


<br><a name="module_grunt-typedoc2md/tasks/typedoc2md..runTaskTypeDoc2MD"></a>

### grunt-typedoc2md/tasks/typedoc2md~runTaskTypeDoc2MD() ⇒ <code>Promise</code>
> Run the 'call_npm' task.

**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  

<br><a name="module_grunt-typedoc2md/tasks/typedoc2md..registerMultiTaskTypeDoc2MD"></a>

### grunt-typedoc2md/tasks/typedoc2md~registerMultiTaskTypeDoc2MD(grunt)
> Registers the 'call_npm' multitask.


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

