import { Component } from '@angular/core';

interface IPelicula{
  id: number
  titulo: string
  sinopsis: string
  actores: string
  anno: number

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  precio: number = 100
  fechaActualizacion: Date = new Date()
  peliculas: Array<IPelicula> = [
    {id: 1, titulo: "Iron Man", sinopsis: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    actores: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard", anno: 2008 },

    {id: 2, titulo: "Independence Day", sinopsis: "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
    actores: "Will Smith, Bill Pullman, Jeff Goldblum", anno: 1996},

    {id: 3, titulo: "Spider-Man: Into the Spider-Verse", sinopsis: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
    actores: "Shameik Moore, Jake Johnson, Hailee Steinfeld", anno: 2018},

    {id: 4, titulo: "The Lord of the Rings: The Fellowship of the Ring", sinopsis: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    actores: "Elijah Wood, Ian McKellen, Orlando Bloom", anno: 2001},

    {id: 5, titulo: "Warcraft", sinopsis: "As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.",
    actores: "Travis Fimmel, Paula Patton, Ben Foster", anno: 2016},

  ]
}
