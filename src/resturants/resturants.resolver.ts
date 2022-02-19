
import { Resolver,Query } from "@nestjs/graphql";


@Resolver()
export class ResturantResolver{
    @Query(() =>  Boolean )
    isPizzaGood():Boolean{
        return true;
    }

}