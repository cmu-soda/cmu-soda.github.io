---
layout: page
title: REU Projects
show_sidebar: false
hide_footer: false
permalink: /reu/
---

<div class="team">

<h2>Research Experiences for Undergraduates</h2>
<p>
The REU program at CMU allows for undergraduate students to gain experience in research methods and practices.
Students work on projects throughout the summer with a graduate student advisor.
Any undergraduate who is interested in working with SoDA may apply through the 
<a href="https://www.cmu.edu/scs/s3d/reuse/">REUSE application</a>.
</p>

<h2>Projects</h2>

{% assign current_year = 2026 %}
{% assign years = site.reu | map: "year" | uniq | sort | reverse %}

{% for y in years %}
  {% if y == current_year %}
    <h3>Current Projects</h3>
  {% else %}
    <h3>Summer {{ y }}</h3>
  {% endif %}

  <div class="team-members">
    {% assign projects = site.reu | where: "year", y %}
    {% for project in projects %}
      <a href="{{ project.url | relative_url }}" class="team-member-link">
        <div class="team-member">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}" style="width:100%;">
          <div class="container">
            <h4><b>{{ project.title }}</b></h4>
            <p><strong>Mentor:</strong> {{ project.mentor }}</p>
            {% if project.student %}
              <p><strong>Student:</strong> {{ project.student }}</p>
            {% endif %}
            <p>{{ project.description | truncatewords: 25 }}</p>
            {% if project.project_link %}
              <a href="{{ project.project_link }}" target="_blank" class="project-link-button">View Project</a>
            {% endif %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
{% endfor %}

</div>

<style>
.team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.team-member-link {
    text-decoration: none;
    color: inherit;
}
.team-member {
    margin: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 280px;
}
.team-member:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
    padding: 2px 16px;
}
.project-link-button {
    display: inline-block;
    margin-top: 8px;
    padding: 6px 12px;
    background-color: #3273dc;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    font-size: 0.9em;
}
.project-link-button:hover {
    background-color: #275aa8;
}
</style>
