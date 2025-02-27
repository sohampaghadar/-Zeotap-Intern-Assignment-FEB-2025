from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Sample knowledge base for answering CDP-related "how-to" questions
knowledge_base = {
    "segment": {
        "setup_source": "To set up a new source in Segment, navigate to 'Sources' in the dashboard, click 'Add Source', and follow the setup instructions.",
        "create_destination": "To create a destination in Segment, go to the Destinations tab, select 'Add Destination', and configure the required settings."
    },
    "mparticle": {
        "create_profile": "To create a user profile in mParticle, go to the 'Profiles' section, select 'New Profile', and input user details.",
        "integrate_sdk": "To integrate mParticle SDK, add the mParticle package to your project and initialize it with your API key."
   
