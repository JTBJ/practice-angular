/**
 * In Angular everything is based on components. We build the whole applicaiton with components. The start of the component tree begins with the AppComponent. The AppComponent is the root compoment which, in the end, holds our entire application. We add our custom made components to the AppComponent's html template, via custom made html tags, defined in the selector statement, to be displayed in the DOM.
 *
 * When creating component files, each component should have a .ts file extentsion, a corresponding .html file for the component's template and an option .css file; all sharing the same name as the component file.
 *
 * A component is basically a class, (a typescript class). Angular will then instantiate the component class to create objects based on the class blue print. We must export the class in order to be able to use it outside the current file.
 */
import { Component } from '@angular/core';

/**This annotation is called a decorater and must be imported into the program in order to use it. I believe this annotation is what is needed to make this class / component an actual component. We must pass a JavaScript object to this component annotation to configure it and this object will serve as meta-data to angular.
 */
@Component({
  /**Represents the html tags that can be used within the other components within your application. The selector is a string and should be unique throughout your application.
   */
  selector: 'app-server',

  /**The template represents your html file of your component. This piece of code tells angular where to local the current component's html file.
   */
  templateUrl: './server.component.html',
})

/** note the class name corresponds with the file name (not mandated) Name of the component first (Server) followed by the description (Component). To use our custom made component within the application, we must make the necessary modifications to the app.module.ts file.
 */
export class ServerComponent {}
