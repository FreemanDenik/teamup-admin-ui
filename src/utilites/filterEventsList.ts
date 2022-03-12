import { EventDto } from "../types";

const filterEventsList = (item: EventDto, interest?: string, titleSearch?: string) => {
  if (interest) {
    return item.eventInterests.find((val) => val.title === interest);
  }
  if(titleSearch){
    return item.eventName.includes(titleSearch)
  }
  return true;
};

export default filterEventsList