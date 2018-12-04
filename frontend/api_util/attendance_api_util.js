export const createAttendance = (attendance) => {
  return $.ajax({
    method: 'POST',
    url: `/api/coffee_times/${attendance.coffee_time_id}/coffee_time_attendances`,
    data: { attendance },
  });
};

export const updateAttendance = (attendance) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/coffee_time_attendances/${attendance.id}`,
    data: { attendance },
  });
};

export const deleteAttendance = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/coffee_time_attendances/${id}`,
  });
};
