import { format} from 'date-fns'

const sortEventsByDate = (year: number,month:number, day: number)=>{
  format(new Date(year, month, day ),  'd MMMM')

}