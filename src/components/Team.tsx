import {Icon} from "./Util/Icon";

const Team = (props) => {

  if(props.world.team) {
    return (
      <div className={'team-container'}>
        <div className={'text-holder'}>
          <h2 className={'text-holder__title'}>Meet the Koios members of this world</h2>
          <p className={'text-holder__subtitle'}>{props.world.team[0].subtitle}</p>
          <p className={'text-holder__paragraph'}>{props.world.team[0].p1}</p>
          <p className={'text-holder__paragraph'}>{props.world.team[0].p2}</p>
        </div>

        <div className={'team-grid'}>
          {props.world.team[0].members.map((memberData, index) => {
          return (
            <div className={'member'} key={index}>
              <img src={memberData.imageUrl} className={'member__image'} alt={'member profile'}/>
              <h5 className={'member__name'}>{memberData.name}</h5>
              <p className={'member__description'}>{memberData.description}</p>
              <div className={'socials'}>
                {memberData.linkedinLink &&
                  <a href={memberData.linkedinLink} className={'socials__link'}>
                    <Icon className={'socials__icon'} type={'linkedin'} />
                  </a>
                }
                {memberData.twitterLink &&
                  <a href={memberData.twitterLink} className={'socials__link'}>
                    <Icon className={'socials__icon'} type={'twitter'}/>
                    <p className={'socials__handle'}>{memberData.twitterHandle}</p>
                  </a>
                }
                {memberData.discordLink &&
                  <a href={memberData.discordLink} className={'socials__link'}>
                    <Icon className={'socials__icon'} type={'discord'} />
                    <p className={'socials__handle'}>{memberData.discordHandle}</p>
                  </a>
                }
              </div>
            </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className={'team-container'}>
        <div className={'text-holder'}>
          <h2 className={'text-holder__title'}>This team does not have any members yet!</h2>
          <p className={'text-holder__subtitle'}>Why don't you join us?</p>
        </div>
      </div>
    )
  }
}

export default Team;
