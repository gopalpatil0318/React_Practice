import React from 'react'
import Card from "./Card"

const Cards = ({ courses }) => {
  let allCourses = [];

  const getCourses = () => {
    Object.values(courses).forEach((coursesCategory) => {
      coursesCategory.forEach((course) => {
        allCourses.push(course);

      })
    })
    return allCourses;
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return (
            <Card course={course} />
          )
        })}
    </div>
  )
}

export default Cards