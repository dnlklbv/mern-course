import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>Your link: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>From: <a href={link.from} target="_blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Click count: <stopng>{link.clicks}</stopng></p>
      <p>Creation date: <stopng>{new Date(link.date).toLocaleDateString()}</stopng></p>
    </>
  )
}