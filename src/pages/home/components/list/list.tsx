import Card from '../card/card';
import * as styles from './list.css';

interface ListProps {
  items: {
    id: number;
    image: string;
    title: string;
    description?: string;
    location?: string;
    variant: 'recommended' | 'nearby';
  }[];
}

const List = ({ items }: ListProps) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default List;
