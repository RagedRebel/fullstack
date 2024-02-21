```mermaid
sequenceDiagram
    participant browser
    participant server    
browser->>server:POST https://fullstack—exampleapp.herokaupp.com/new_note_spa.json
server->>browser:CODE 201 
Note right of browser:code fetched from the server creates event handler to create new note and to add it to list.Page gets rerendered.

browser->>server:POST new_note_spa (content type=json)

```