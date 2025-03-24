type BuyAthleteType = Readonly<{
    playerId: string
    athleteId: string
  }>
  
  export class BuyAthlete implements BuyAthleteType {
    private constructor(
      readonly playerId: BuyAthleteType['playerId'],
      readonly athleteId: BuyAthleteType['athleteId']
    ) {}
  
    static with({ playerId, athleteId }: BuyAthleteType): BuyAthlete {
      return new this(playerId, athleteId)
    }
  }
  