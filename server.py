from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import unquote_plus


def get_body_params(body):
    if not body:
        return {}
    parameters = body.split("&")

    # split each parameter into a (key, value) pair, and escape both
    def split_parameter(parameter):
        k, v = parameter.split("=", 1)
        k_escaped = unquote_plus(k)
        v_escaped = unquote_plus(v)
        return k_escaped, v_escaped

    body_dict = dict(map(split_parameter, parameters))
    print(f"Parsed parameters as: {body_dict}")
    # return a dictionary of the parameters
    return body_dict


def submission_to_table(item):
    print("printing from submission_to_table function: ", item)
    # example input: Parsed parameters as: {'day': 'Sun', 'event': 'y4', 'start-time': '16:21', 'end-time': '19:21', 'phone': '7634772445', 'url': 'https://google.com'}
    """TODO: Takes a dictionary of form parameters and returns an HTML table row
       The HTML row will be in the same format as a row on your schedule

    An example input dictionary might look like: 
    {
     'event': 'Sleep',
     'day': 'Sun',
     'start': '01:00',
     'end': '11:00', 
     'phone': '1234567890', 
     'location': 'Home',
     'url': 'https://example.com'
    }
    """
    return (f"""
            <tr class="schedule-row">
                <th>{item["day"]}</th>
                <th>{item["event"]}</th>
                <th>{item["startTime"]} - {item["endTime"]}</th>
                <th>anderson hall</th>
                <th>{item["phone"]}</th>
                <th><a href="{item["url"]}">{item["event"]} info</a></th>
            </tr>
        """)

myImages = {
    "/myImg/flag.png" : "image/png",
    "/myImg/map.png" : "image/png",
    "/myImg/my dog sunbathing.jpg" : "image/jpg",
    "/myImg/travel.jpg" : "image/jpg",
    "/myImg/washington_back.jpg" : "image/jpg",
    "/myImg/washington.jpg" : "image/jpg",
    "/myImg/with_my_dawg.jpg" : "image/jpg",
    "/myImg/skii.mp4" : "video/mp4",
}

# NOTE: Please read the updated function carefully, as it has changed from the
# version in the previous homework. It has important information in comments
# which will help you complete this assignment.
def handle_req(url, body=None):
    """
    The url parameter is a *PARTIAL* URL of type string that contains the path
    name and query string.

    If you enter the following URL in your browser's address bar:
    `http://localhost:4131/myform.html?name=joe` then the `url` parameter will have
    the value "/MyForm.html?name=joe"

    This function should return two strings in a list or tuple. The first is the
    content to return, and the second is the content-type.
    """
    # print("printing from handle_rq the body:", body)

    # Get rid of any query string parameters
    url, *_ = url.split("?", 1)
    # Parse any form parameters submitted via POST
    parameters = get_body_params(body)

    # for aboutme
    if url == "/aboutme.html":
        return open("static/html/aboutme.html").read(), "text/html"
    if url == "/aboutme.js":
        return open("static/js/aboutme.js").read(), "text/javascript"
    elif url == "/aboutme.css":
        return open("static/css/aboutme.css").read(), "text/css"
    # for myschedule
    elif url == "/myschedule.html":
        return open("static/html/myschedule.html").read(), "text/html"
    elif url == "/myschedule.js":
        return open("static/js/myschedule.js").read(), "text/javascript"
    elif url == "/myschedule.css":
        return open("static/css/myschedule.css").read(), "text/css"
    # for myform
    elif url == "/myform.html":
        return open("static/html/myform.html").read(), "text/html"
    elif url == "/myform.js":
        return open("static/js/myform.js").read(), "text/javascript"
    elif url == "/myform.css":
        return open("static/css/myform.css").read(), "text/css"
    # others
    elif url in myImages:
        # print("url ---->>>", url[4:], f"static/i{url[4:]}")
        return open(f"static/i{url[4:]}", "br").read(), myImages[url]
    elif url == "/img/gophers-mascot.png":
        return open("static/img/gophers-mascot.png", "br").read(), "image/png"
    # NOTE: The files you return will likely be different for your server, but the code to
    # show you examples of how yours may look. You will need to change the paths
    # to match the files you want to serve. Before you do that, make sure you
    # understand what the code is doing, specifically with the MIME types and
    # opening some files in binary mode, i.e. `open(..., "br")`.
    elif url == "/css/style.css":
        return open("static/css/style.css").read(), "text/css"
    elif url == "/js/script.js":
        return open("static/js/script.js").read(), "text/javascript"
    elif url == "/img/Dan1.jpeg":
        return open("static/img/Dan1.jpeg", "br").read(), "image/jpeg"
    elif url == "/img/Anderson.jpg":
        return open("static/img/Anderson.jpg", "br").read(), "image/jpeg"
    elif url == "/img/childrens_rehab.jpg":
        return open("static/img/childrens_rehab.jpg", "br").read(), "image/jpeg"
    elif url == "/img/rec.jpg":
        return open("static/img/rec.jpg", "br").read(), "image/jpeg"
    elif url == "/img/Bruininks.jpg":
        return open("static/img/Bruininks.jpg", "br").read(), "image/jpeg"
    elif url == "/img/Lind.png":
        return open("static/img/Lind.png", "br").read(), "image/png"
    elif url == "/img/zoom.jpg":
        return open("static/img/zoom.jpg", "br").read(), "image/jpeg"
    elif url == "/img/vanCleve.jpg":
        return open("static/img/vanCleve.jpg", "br").read(), "image/jpeg"
    elif url == "/img/breakfast.jpg":
        return open("static/img/breakfast.jpg", "br").read(), "image/jpeg"
    elif url == "/img/track.jpg":
        return open("static/img/track.jpg", "br").read(), "image/jpeg"
    # TODO: Add update the HTML below to match your other pages and
    # implement the `submission_to_table`.
    elif url == "/EventLog.css":
        return open("static/css/EventLog.css").read(), "text/css"
    elif url == "/EventLog.html":
        return (
            f"""
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>event Log</title>
                    <link rel="stylesheet" href="EventLog.css">
                </head>
                <body>
                    <header>
                        <div>
                            <nav class="nav-container">
                                <nav>
                                <ul>
                                    <li><a href="aboutme.html">About Me</a></li>
                                    <li><a href="myschedule.html">mySchedule</a></li>
                                    <li><a href="myform.html">myForm</a></li>
                                </ul>
                                </nav>
                            </nav>
                        </div>
                    </header>
                    <h1> My New Events </h1>
                    <div class="schedule-picture-container" >
                        <table class="schedule-table">
                            <thead class="schedule-head">
                                <tr class="schedule-row">
                                    <th>Day</th>
                                    <th>Event</th>
                                    <th>Time</th>
                                    <th>Event Location (Virtual or Physical)</th>
                                    <th>Phone Number</th>
                                    <th>URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {submission_to_table(parameters)}
                            </tbody>
                        </table>
                    </div>
                </body>
                </html>
                """,
                "text/html; charset=utf-8",
        )
    else:
        return open("static/html/404.html").read(), "text/html; charset=utf-8"


# Don't change content below this. It would be best if you just left it alone.


class RequestHandler(BaseHTTPRequestHandler):
    def __c_read_body(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        body = str(body, encoding="utf-8")
        return body

    def __c_send_response(self, message, response_code, headers):
        # Convert the return value into a byte string for network transmission
        if type(message) == str:
            message = bytes(message, "utf8")

        # Send the first line of response.
        self.protocol_version = "HTTP/1.1"
        self.send_response(response_code)

        # Send headers (plus a few we'll handle for you)
        for key, value in headers.items():
            self.send_header(key, value)
        self.send_header("Content-Length", len(message))
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()

        # Send the file.
        self.wfile.write(message)

    def do_GET(self):
        # Call the student-edited server code.
        message, content_type = handle_req(self.path)

        # Convert the return value into a byte string for network transmission
        if type(message) == str:
            message = bytes(message, "utf8")

        self.__c_send_response(
            message,
            200,
            {
                "Content-Type": content_type,
                "Content-Length": len(message),
                "X-Content-Type-Options": "nosniff",
            },
        )

    def do_POST(self):
        body = self.__c_read_body()
        message, content_type = handle_req(self.path, body)

        # Convert the return value into a byte string for network transmission
        if type(message) == str:
            message = bytes(message, "utf8")

        self.__c_send_response(
            message,
            200,
            {
                "Content-Type": content_type,
                "Content-Length": len(message),
                "X-Content-Type-Options": "nosniff",
            },
        )


def run():
    PORT = 4131
    print(f"Starting server http://localhost:{PORT}/")
    # print(myImages)
    server = ("", PORT)
    httpd = HTTPServer(server, RequestHandler)
    httpd.serve_forever()


run()
