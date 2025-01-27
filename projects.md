---
title: Projects
subtitle: Check out our research projects
layout: page
show_sidebar: false
# sort: price
permalink: /projects/
--- 

<div class="projects">

{% if site.team != blank -%} 

<!-- Current Projects -->
<h3>Current</h3>
<div class="lab-projects">
    {%- for project in site.projects %}
        {%- if project.category != 'past' %}
            <a href="{{ '' | append: project.name | downcase | replace: '.md', ''| append: '.html' }}" class="lab-project-link">
                <div class="lab-project">
                    <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" style="width:100%;">
                    <div class="container">
                        <h4><b>{{ project.title }}</b></h4>
                    </div>
                </div>
            </a>
        {%- endif %}
    {%- endfor %}
</div>

<!-- Past Projects -->
<h3>Past</h3>
<div class="lab-projects">
    {%- for project in site.projects %}
        {%- if project.category == 'past' %}
            <a href="{{ '' | append: project.name | downcase | replace: '.md', ''| append: '.html' }}" class="lab-project-link">
                <div class="lab-project">
                    <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" style="width:100%;">
                    <div class="container">
                        <h4><b>{{ project.title }}</b></h4>
                    </div>
                </div>
            </a>
        {%- endif %}
    {%- endfor %}
</div>

{%- else -%} 
<p>No projects listed so far...</p>
{%- endif %} 
</div>


<style>
.lab-projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start; /* Align items to the left */
}
.lab-project-link {
    text-decoration: none; /* Optional: removes underline from links */
    color: inherit; /* Optional: keeps text color consistent with the rest of the design */
}
.lab-project {
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 240px; /* Adjust based on your preference */
}
.lab-project:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
    padding: 2px 16px;
}
</style>
