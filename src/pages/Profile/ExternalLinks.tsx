import { Icon } from '../../components/Util/Icon';
import { SvgSprite } from '../../components/Util/SvgSprite';

type ExternalLinksProps = {
  links: any;
  lensHandle: string;
  className?: string;
};

type ExternalLinkItemProps = {
  item: string;
  icon?: keyof typeof SvgSprite;
  children?: React.ReactNode;
  link: string;
};

const ExternalLinkItem = (props: ExternalLinkItemProps) => {
  return (
    <li key={props.item}>
      <a
        className={`link external-links__item external-links__item--${props.item}`}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.icon ? <Icon type={props.icon} /> : props.children}
      </a>
    </li>
  );
};

const getExternalLinkItem = (link: any, lensHandle: string) => {
  const itemName = link.key.toLowerCase();

  switch (itemName) {
    case 'twitter':
      return (
        <ExternalLinkItem item={itemName} icon="twitter" link={`https://twitter.com/${link.value}`} key={itemName} />
      );
    case 'discord':
      return <ExternalLinkItem item={itemName} icon="discord" link={link.value} key={itemName} />;
    case 'website':
      return <ExternalLinkItem item={itemName} icon="globe" link={link.value} key={itemName} />;
    case 'github':
      return <ExternalLinkItem item={itemName} icon="github" link={link.value} key={itemName} />;
    case 'app':
      return <ExternalLinkItem item={itemName} link={`https://www.lensfrens.xyz/${lensHandle}`} key={itemName} >🌿</ExternalLinkItem>;
    default:
      return undefined;
  }
};

export const ExternalLinks = ({ links, lensHandle }: ExternalLinksProps) => {
  return <ul className={`external-links`}>{links.map((link) => getExternalLinkItem(link, lensHandle))}</ul>;
};
