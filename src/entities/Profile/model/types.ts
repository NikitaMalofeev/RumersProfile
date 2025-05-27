export interface ProfilePageProps {
    status: 'delete' | 'active'
    meOrNot: boolean
    //под вопросом
    sideActions: [
        {
            icon: string
            description: string
        }
    ]
    //под вопросом
    data: {
        role: string
        name: string
        lastName: string
        nickname: string
        dateLastActivity: Date
        city: string
        statistick: {
            durationOfActivity: string
            meetingsCount: string
            friendsList: string
        }
    },
    config: {
        firstList: {
            publick: boolean,
            age: boolean
        }
        secondList: {
            subscriptions: boolean
            blackList: boolean
            bookmark: boolean
        }
        thirdList: {
            userDescription: string
            userTelegram: string
        }
        fourthList: {
            opportunitiesIG: html | string[],
            rulesIg: html | string[],
            instructionRum: html | string[],
            instructionM: html | string[],
            instructionPlace: html | string[],
            userAgreement: html | string[],
        }
        fifthList: {
            logout: boolean;
        }
        sixList: {
            history: boolean;
        }
    }
    actions: {
        me: string
        update: string
    }
    zovsAccordion: [
        {
            img: string
            title: string
            date: string
        }
    ]
    comeAccordion: [
        {
            img: string
            title: string
            date: string
        }
    ]

}