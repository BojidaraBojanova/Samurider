import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../dataService.js";
import { userHelper } from "../userHelper.js";

const detailsTemp = (item, isOwner)=> html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${item.year}</p>
                <p class="mileage">Mileage: ${item.mileage} km.</p>
                <p class="contact">Contact Number: ${item.contact}</p>
                   <p id = "motorcycle-description">
                        ${item.about};
                    </p>
              </div>
              ${isOwner ? 
                    html`
                <!--Edit and Delete are only for creator-->
                    <div id="action-buttons">
                        <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                        <a @click=${delMotor} href="" id="delete-btn">Delete</a>
                    </div>
                `: html`<br>`
                }
              
            </div>
        </div>
    </section>
`;

let context = null;
export async function showDetailsView(ctx){
    const id = ctx.params.id;
    const data = await dataService.getSingleMotor(id)
    let isOwner = userHelper.getUserID() === data._ownerId;
    ctx.render(detailsTemp(data, isOwner));
    context = ctx;
};

async function delMotor(e){
    e.preventDefault();

    const confirmed = window.confirm("Are you sure you want to delete the motor");

    if(confirmed){
        const id = context.params.id;
        await dataService.deleteMotor(id);
        context.goTo("/dashboard");
    }
}