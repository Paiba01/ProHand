import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class BuyAthleteDto {
    @ApiProperty({ description: "ID of the player making the purchase" })
    @IsString()
    readonly playerId: string;

    @ApiProperty({ description: "ID of the athlete being purchased" })
    @IsString()
    readonly athleteId: string;
}