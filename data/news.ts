import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { type ComponentProps } from 'react';

export type NewsItemType = {
  title: string;
  date: string;
  icon: ComponentProps<typeof MaterialIcons>['name'];
};

export const mockNews: NewsItemType[] = [
  {
    title: "Descoberta Arqueológica Revolucionária no Egito",
    date: "2026-03-13",
    icon: "museum",
  },
  {
    title: "Novo Recorde Mundial de Natação",
    date: "2026-03-12",
    icon: "pool",
  },
  {
    title: "Avanço na Medicina: Cura para Doença Rara",
    date: "2026-03-11",
    icon: "local-hospital",
  },
  {
    title: "Festival de Cinema Premia Filme Brasileiro",
    date: "2026-03-10",
    icon: "movie",
  },
  {
    title: "Iniciativa Ambiental Protege Floresta Amazônica",
    date: "2026-03-09",
    icon: "park",
  },
];
