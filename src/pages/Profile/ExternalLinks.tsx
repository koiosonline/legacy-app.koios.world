import { Icon } from '../../components/Util/Icon';
import { SvgSprite } from '../../components/Util/SvgSprite';

type ExternalLinksProps = {
  links: any;
  className?: string;
};

type ExternalLinkItemProps = {
  item: string;
  icon: keyof typeof SvgSprite;
  link: string;
}

const ExternalLinkItem = (props: ExternalLinkItemProps) => {
  return (
    <li key={props.item}>
      <a className={`link external-links__item external-links__item--${props.item}`} href={props.link} target="_blank" rel="noopener noreferrer">
        <Icon type={props.icon} />
      </a>
    </li>
  );
};

const getExternalLinkItem = (link: any) => {
  const itemName = link.key.toLowerCase();

  switch (itemName) {
    case 'twitter':
      return <ExternalLinkItem item={itemName} icon="twitter" link={`https://twitter.com/${link.value}`} key={itemName} />;
    case 'discord':
      return <ExternalLinkItem item={itemName} icon="discord" link={link.value} key={itemName} />;
    case 'website':
      return <ExternalLinkItem item={itemName} icon="globe" link={link.value} key={itemName} />;
    default:
      return undefined;
  }
};

export const ExternalLinks = ({ links }: ExternalLinksProps) => {
  return (
    <ul className={`external-links`}>{links.map((link) => getExternalLinkItem(link))}</ul>
  );
};
