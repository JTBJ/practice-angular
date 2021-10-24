import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

/**Tells typescript where to find our custom component. We must import our custom components and register them in the declarations array below in order to use them in our application. Now angular knows we have a ServerComponent and where to find it and the module can also bundle / package our app using this component.*/
import { ServerComponent } from './server/server.component';

/**This annotation converts this class into a module. It is passed a metadata object that describes how to compile a component's template and how to create an injector at runtime. It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them. Basically, it's a bundle of functionality of our app and it informs angular about the functionality and features the app has. */
@NgModule({

  /**Allows us to add other modules into the current module. */
  imports:      [ BrowserModule, FormsModule ],

  /**Within the declarations array, we register our custom components. All components must be imported. */
  declarations: [ AppComponent, HelloComponent, ServerComponent ],

  /**tell angular to bootstrap the entire application with this being the root component. All our other components will not be added to the index.html file, but their selectors will be added to the AppComponent.html file as this is the root component of our app.
  */
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

/**Angular uses components to build web pages and appModules to bundle different pieces, i.e. components, of our apps into packages. AppModule represents an empty typescript class. 
 */