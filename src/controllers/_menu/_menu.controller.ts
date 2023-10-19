import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MenuService } from './_menu.service';


// COUCHE ROUTAGE + CONTROLLERS (ne fait que lister les routers et appel le service (businiess + db))
@Controller('menu')
export class MenuController {

    constructor(private readonly menuService: MenuService) { }

    //localhost:3000/menu
    //localhost:3000/menu?pageName=pizzas
    //localhost:3000/menu?pageName=pizzas&type=carnos
    @Get()
    getAllMenu( 
        @Query("pageName") pageName: string,
        @Query("type") type: string,
        @Query() queryParams: any
    ): Promise<any[]> {
        console.log(queryParams)
        console.log(pageName)
        console.log(type)
        try {
            return this.menuService.getAllMenu(pageName, type)
        }
        catch (error) {
            console.log(error)
            return error
        }

    }



    //localhost:3000/menu/:id
    @Get(":id")
    getOneDish(
        @Param("id", ParseIntPipe) id: number
    ): Promise<any>
    {
        console.log(id)
        try {
            return this.menuService.getOneDish(id)
        }
        catch (error) {
            console.log(error)
            return error
        }

    }


}
