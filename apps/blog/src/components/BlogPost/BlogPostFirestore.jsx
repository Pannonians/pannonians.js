import React from 'react'
import Firebase from '../../firebase';
import { useState, useEffect } from 'react';
import { query, collection, getDoc, doc } from '@firebase/firestore';
import Card from '../../UI/Card/Card';
import picture3 from "../../pictures/Slika-3.jpg"
import Hero from '../Hero/Hero';

/**
* @author
* @function BlogPostFirestore
**/


const instance = Firebase.getInstance();
const db = instance.db;
const arrayPosts = [];

export const BlogPostFirestore = (props) => {

    
    

        return (
      
           
          <div style={{ textAlign: 'center' }}>
    
            <h1>Post</h1>
            
          </div>
   
    
    
      )
  }
