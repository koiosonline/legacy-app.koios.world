import WidgetBot from '@widgetbot/react-embed';

const DiscordEmbed = () => {
  return (
    <div className={'discordContainer'}>
      <div className={'text-holder'}>
        <h2 className={'text-holder__title'}>Announcements</h2>
        <p className={'text-holder__description'}>Check out the latest announcements from the Twitter feed of Koios. Here you can see updates about the course and lessons.</p>
      </div>
      <div className={'embed'}>
        <WidgetBot
          server="758719930383597608"
          channel="801476848626040873"
          height={200}
          width={340}
          style={{borderRadius: 20}}
        />
      </div>
    </div>
  );
};

export default DiscordEmbed;
