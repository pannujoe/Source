import { Component } from '@angular/core';
import { HumanService } from './app.service';

@Component({
	selector: 'human',
	moduleId: module.id,
	templateUrl:'human.html',
	providers:[HumanService]
})

export class HumanComponent {
	 humans: Array<any>;
	 name: string;
	 age:number;

	 constructor(private humanService: HumanService) {
		 humanService.getHumans().subscribe(response => {
			 this.humans = response
		 })
	 }

addHuman(){
		 var human = {
			 name: this.name,
			 age: this.age
		 }
			this.humanService.addHuman(human)
				.subscribe(data => {
					console.log('Success' + data)
					this.humans.push(human);
				})
	 }

}