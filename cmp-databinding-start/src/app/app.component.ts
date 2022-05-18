import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testserver', content: 'sth'}];
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverBlueprint: {serverName: string, serverContent: string}) {
     this.serverElements.push({
      type: 'blueprint',
      name: serverBlueprint.serverName,
      content: serverBlueprint.serverContent
    });
  }
  
  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }
}

