/*
 * Copyright 2013 Frank Breedijk
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'seccubus/models' )
.then( './views/init.ejs', 
       './views/config_item.ejs', 
       function($){

/**
 * @class Seccubus.ConfigItem.List
 * @parent ConfigItem
 * @inherits jQuery.Controller
 * Lists config_items
 */
$.Controller('Seccubus.ConfigItem.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	/**
	 * The init function renders the ConfigItem list by calling the findAll
	 * function on the model and rendering the list/init.ejs view
	 * @return undefined
	 */
	init : function(){
		this.element.html(this.view('init',Seccubus.Models.ConfigItem.findAll()) )
	}
});

});
