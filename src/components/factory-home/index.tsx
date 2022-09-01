import React from 'react';

import {VideoSecion} from './videos';
import {MealSection} from './meals';
import {PeopleSection} from './poeple';

export default class HomeFactory {
  static build(data: any) {
    switch (data.type) {
      case 'Video':
        return <VideoSecion {...data} />;
      case 'Meals':
        return <MealSection {...data} />;
      case 'People':
        return <PeopleSection {...data} />;
      default:
        return undefined;
    }
  }
}
